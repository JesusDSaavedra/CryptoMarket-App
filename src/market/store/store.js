import { configureStore } from "@reduxjs/toolkit";
import { coinsSlice } from "./coins/coinsSlice";
import { infoCoinSlice } from "./infoCoin/infoCoinSlice";


export const store = configureStore({
    reducer: {
        ui: coinsSlice.reducer,
        info: infoCoinSlice.reducer,
    }
})