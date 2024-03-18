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
export type TUser = {
    userId:string;
    role:string;
    iat:number;
    exp:number
}
export type TAuth = {
    user:null | TUser
    token:null | string
    userProfile:null | TProfile
}

const initialState:TAuth = {
    user:null,
    token:null,
    userProfile:null
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
        logout:(state)=>{
            state.user = null;
            state.token = null
        }
    }
})

export const {setUser,logout,setProfile} = authSlice.actions
export default authSlice.reducer

export const useCurrentToken = (state:RootState) => state.auth.token
export const useCurrentUser = (state:RootState) => state.auth.user