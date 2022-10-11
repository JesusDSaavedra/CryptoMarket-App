import { createSlice } from '@reduxjs/toolkit';

export const infoCoinSlice = createSlice({
    name: 'infoCoin',
    initialState: {
        isChartTime: '7',
        isChart: 'line',
        isCurrencyConverter: 'usd',
    },
    reducers: {
        chartTime: ( state, { payload } ) => {
            state.isChartTime = payload;
        },
        chart: ( state, { payload } ) => {
            state.isChart = payload;
        },
        currencyConverter: ( state, { payload }) => {
            state.isCurrencyConverter = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { chartTime, chart, currencyConverter } = infoCoinSlice.actions;