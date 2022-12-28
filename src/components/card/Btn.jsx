import {useContext} from "react";
import {CardContext} from "../../context/CardContext.jsx";

export const Btn = ({number, className}) => {

    const {currentNumber, setNumber, setSubmitState} = useContext(CardContext);

    const setNewNumber = () => {
        setNumber(number)
    }

    const setNewSubmitState = () => {

        if (currentNumber !== 0) {
            setSubmitState(true)
        }
    }

    if (number) {
        return (
            <button className={className} onClick={setNewNumber}>{number}</button>
        )
    } else {
        return (
            <button className={className} onClick={setNewSubmitState}>Submit</button>
        )
    }
}