import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./Reducers/userReducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
let rootReducer = combineReducers({
  userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
