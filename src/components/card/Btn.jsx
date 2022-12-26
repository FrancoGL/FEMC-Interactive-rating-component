import {useContext} from "react";
import {CardContext} from "../../context/CardContext.jsx";

export const Btn = ({number, className}) => {

    const {currentNumber, setNumber, setSubmitState} = useContext(CardContext);

    if (number) {
        return (
            <button className={className} onClick={()=> setNumber(number)}>{number}</button>
        )
    } else {
        return (
            <button className={className} onClick={()=> {
                if (currentNumber !== 0) {
                    setSubmitState(true)
                }
            }
            }>Submit</button>
        )
    }
}