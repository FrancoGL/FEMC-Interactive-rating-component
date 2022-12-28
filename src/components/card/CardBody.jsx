import {Btn} from "./Btn.jsx";
import {CardContext} from "../../context/CardContext.jsx";
import {TittleAndParagraph} from "./TittleAndParagraph.jsx";
import {useContext, useEffect} from "react";

export const CardBody = () => {

    const {submitState} = useContext(CardContext)
    
    if (!submitState) {
        return (
            <div className={"card__body"}>
                <TittleAndParagraph isAlter={false}></TittleAndParagraph>

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
    }
    return (
        <div className="card__body">
            <TittleAndParagraph isAlter={true}></TittleAndParagraph>
        </div>
    )
}