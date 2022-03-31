import { createStore, combineReducers} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../reducers/contactsReducer";
import authReducer from "../reducers/authReducer";

const persistConfig = {
  key: "root",
  storage
};

const reducers = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { persistor, store};