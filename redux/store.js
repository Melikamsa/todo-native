import { configureStore } from "@reduxjs/toolkit";
import persistedRaducers from "./reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: persistedRaducers,
});

export const persistore = persistStore(store);

