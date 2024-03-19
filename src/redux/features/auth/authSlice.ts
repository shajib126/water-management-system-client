import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export type TProfile = {
    userType:string;
    userRole:string;
    _id:string;
    adminStoreId:string;
    name:string;
    address:string;
    phone:string;
    createdAt:string;
    updateAt:string

}
export type TAdminProfile = {
    _id:string;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    address:string;
    stoerId:string;
    isActive:boolean;
    createdAt:string;
    updateAt:string
}
export type TUser = {
    userId:string;
    role:string;
    iat:number;
    exp:number
}
export type TAuth = {
    user:null | TUser
    token:null | string
    userProfile:null | any
    adminProfile:null | TAdminProfile
}

const initialState:TAuth = {
    user:null,
    token:null,
    userProfile:null,
    adminProfile:null
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {user,token} = action.payload
            state.user = user;
            state.token = token
        },
        setProfile:(state,action)=>{
            state.userProfile = action.payload
        },
        setAdminProfile:(state,action)=>{
            state.adminProfile = action.payload
        },
        logout:(state)=>{
            state.user = null;
            state.token = null;
            state.userProfile = null;
            state.adminProfile = null
        }
    }
})

export const {setUser,logout,setProfile,setAdminProfile} = authSlice.actions
export default authSlice.reducer

export const useCurrentToken = (state:RootState) => state.auth.token
export const useCurrentUser = (state:RootState) => state.auth.user