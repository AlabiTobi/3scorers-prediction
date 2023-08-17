import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loggedInSlice from "./redux/slices/loggedInSlice";
import fetchedRolesSlice from "./redux/slices/fetchedRolesSlice";

const persistConfig = {
  key: "3scorers",
  storage,
};

const reducer = combineReducers({
  loggedIn: loggedInSlice,
  fetchedRoles: fetchedRolesSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
