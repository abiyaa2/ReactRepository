import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducers";

const reducers = combineReducers (
    {
        counter:CounterReducer,

    }
)

export default reducers;

//combined reducers