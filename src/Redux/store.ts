import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import servicesReducer, {AllserviceType} from "./services/reducer";
import logger from "redux-logger"
import thunk from "redux-thunk"
const combinedReducer = combineReducers({
    services: servicesReducer
})
type GlobalState = {
    services: AllserviceType
}
const store = configureStore({
    reducer: combinedReducer,
    middleware: (defaultMiddleware)=>defaultMiddleware().concat(logger, thunk)
})

export default store
export type {GlobalState}