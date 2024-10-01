import { Actiontypes } from "./Actiontypes"

export const increment=(inc)=>
{
    return {
        type : Actiontypes.INCREMENT ,
        payload : inc,
    }
}

export const decrement =(inc)=>
{
    return{
        type : Actiontypes.DECREMENT,
        payload : inc,
    }
}

export const reset=()=>
{
    return{
        type: Actiontypes.RESET,
        payload:0,
    }
}
// its functions
//returns object 
//payload - input
//all passing to reducers = current state + updated state