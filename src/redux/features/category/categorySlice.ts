import { createSlice } from "@reduxjs/toolkit";

export type TCategory = {
    categories:null | any
}
const initialState:TCategory = {
    categories:null
}

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategories:(state,action)=>{
            state.categories = action.payload
        }
    }
})

export const {setCategories} = categorySlice.actions
export default categorySlice.reducer