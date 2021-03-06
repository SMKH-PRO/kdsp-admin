import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./Reducers/userReducer";
import waitListReducer from "./Reducers/waitListReducer";
import doctorReducer from "./Reducers/doctorReducer";
import ScheduleReducer from "./Reducers/ScheduleReducer";
import clientReducer from "./Reducers/clientReducer";

import { persistStore, persistReducer } from "redux-persist";
import msheetReducer from "./Reducers/msheetReducer";

const persistConfig = {
  key: "root",
  storage,
};
let rootReducer = combineReducers({
  userReducer,
  waitListReducer,
  doctorReducer,
  ScheduleReducer,
  msheetReducer,
  clientReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
