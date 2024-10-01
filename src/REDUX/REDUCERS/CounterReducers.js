import { Actiontypes } from "../ACTIONS/Actiontypes";

let initialstate = 0;
export const CounterReducer=(state= initialstate, {type,payload})=>
{
   switch (type) {
    case Actiontypes.INCREMENT:
        return state+payload;
     case Actiontypes.DECREMENT:
        return state-payload;
    case Actiontypes.RESET:
        return payload;
    default:
        return state;
   }
}



