import { useReducer } from "react";

type ConterState = {
    count: number;
}

type UpdateAction = {
    type: "increment" | "decrement"
    payload: number
}

type ResetAction = {
    type: "reset"
}

type ConterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

const reducer = (state:ConterState, action:ConterAction) => { 
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        case "reset":
            return initialState
        default:
            return state;
    }
}

export const Counter = () => { 
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type:  "increment",payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );    
}
