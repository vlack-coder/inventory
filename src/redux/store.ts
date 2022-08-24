import { combineReducers, configureStore } from "@reduxjs/toolkit";
import typeReducer from "./typeSlice";
import resourceReducer from "./resourceSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};


const rootReducer = combineReducers({
  type: typeReducer,
  resource: resourceReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export const persistor = persistStore(store);
