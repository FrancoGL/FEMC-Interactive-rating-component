import {Btn} from "./Btn.jsx";

export const CardBody = () => {
    return (
        <div className={"card__body"}>
            <h1>How did we do?</h1>

            <p>Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!</p>

            <Btn number={1} className={"btn__number"}></Btn>
            <Btn number={2} className={"btn__number"}></Btn>
            <Btn number={3} className={"btn__number"}></Btn>
            <Btn number={4} className={"btn__number"}></Btn>
            <Btn number={5} className={"btn__number"}></Btn>

            <Btn className={"btn__submit"}></Btn>
        </div>
    )
}