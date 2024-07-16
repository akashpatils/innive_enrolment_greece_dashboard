import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    handleThemeClick:()=>{},
}

const globalSlice = createSlice({
    name : 'global',
    initialState,
    reducers : {
        setState : (state,action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const {setState} = globalSlice.actions;
export default globalSlice.reducer;

