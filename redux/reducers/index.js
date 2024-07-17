import { combineReducers } from "@reduxjs/toolkit";
import themes from "./themes/themes";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todos from "./todos/todos";


const combinedReducers = combineReducers({
  themes,
  todos,
});

const persistedRaducers = persistReducer({
  key: "persistedRootData",
  storage,
  whitelist: [
    "themes"
    ,
     "todos"
    ],
} , combinedReducers);

export default persistedRaducers