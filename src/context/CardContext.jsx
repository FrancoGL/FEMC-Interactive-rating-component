import {createContext, useState} from "react";

export const CardContext = createContext()

export const CardContextProvider = (props) => {
    const [currentNumber, setNumber] = useState(0);
    const [submitState, setSubmitState] = useState(false);

    return <CardContext.Provider value={{currentNumber:currentNumber,
        setNumber:setNumber, submitState:submitState, setSubmitState:setSubmitState}}>
        {props.children}
    </CardContext.Provider>
}