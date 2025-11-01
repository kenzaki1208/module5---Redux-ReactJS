import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducer";
import userSaga from "../saga/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);

export default store;