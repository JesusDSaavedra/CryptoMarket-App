import { createSlice } from '@reduxjs/toolkit';

export const coinsSlice = createSlice({
    name: 'coins',
    initialState: {
       isCurrency: 'usd',
       isMode: false ,
       page: '1',
    },
    reducers: {
        changeMode: ( state, {payload} ) => {
            state.isMode = payload;
        },
        changeCurrency: ( state, {payload} ) => {
            state.isCurrency = payload;
        },
        changePage: ( state, {payload} ) => {
            state.page = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { changeMode, changeCurrency, changePage } = coinsSlice.actions;