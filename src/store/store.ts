import {configureStore} from "@reduxjs/toolkit";
//import { getDefaultMiddleware} from "@reduxjs/toolkit";
//import {createLogger} from "redux-logger";
//import popular from "./popular/popular.slice";
//import battle from "./battle/battle.slice"
//import { applyMiddleware, createStore } from 'redux';

const store = configureStore({
    reducer: {
        // popular: popular,
        // battle: battle,
    },
    //middleware: () =>
        // getDefaultMiddleware().concat(
        //     createLogger({
        //         collapsed: true,
        //     }),
        // ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;