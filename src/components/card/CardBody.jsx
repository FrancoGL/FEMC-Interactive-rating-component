import {Btn} from "./Btn.jsx";
import {CardContext} from "../../context/CardContext.jsx";
import {useContext, useEffect} from "react";

export const CardBody = () => {

    const {submitState} = useContext(CardContext)

    if (!submitState) {
        return (
            <div className={"card__body"}>
                <h1 className={"body__title"}>How did we do?</h1>

                <p className={"body__paragraph"}>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>

                <div className="btn__container">
                    <Btn number={1} className={"btn__number"}></Btn>
                    <Btn number={2} className={"btn__number"}></Btn>
                    <Btn number={3} className={"btn__number"}></Btn>
                    <Btn number={4} className={"btn__number"}></Btn>
                    <Btn number={5} className={"btn__number"}></Btn>
                </div>

                <Btn className={"btn__submit"}></Btn>
            </div>
        )
    } else {
        return (
            <div className="card__body">

                <h1 className="body__title alter">Thank you!</h1>

                <p className="body__paragraph alter">We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!</p>
            </div>
        )
    }
}