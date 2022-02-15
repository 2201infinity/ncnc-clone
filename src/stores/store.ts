import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import brandDetail from "./brandDetail";

const rootReducer = combineReducers({
  brandDetail: brandDetail.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default store;
