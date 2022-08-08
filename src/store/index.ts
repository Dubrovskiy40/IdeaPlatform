import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
    tickets: ticketsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

type RootReducer = typeof rootReducer;

export type RootState = ReturnType<RootReducer>

export default store;