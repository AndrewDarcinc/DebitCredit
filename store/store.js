import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
const reducers = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
