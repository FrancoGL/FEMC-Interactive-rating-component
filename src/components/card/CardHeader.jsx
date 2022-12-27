import {useContext} from "react";
import {CardContext} from "../../context/CardContext.jsx";

export const CardHeader = () => {
    const {submitState, currentNumber} = useContext(CardContext)

    if (!submitState) {
        return (
            <section className={"card__header"}>
                <img src="/icon-star.svg" alt="Icon star" className={"header__img"} width={"17"} height={"16"}/>
            </section>
        )
    } else {
        return (
            <section className={"card__header alter"}>
                <img src="/illustration-thank-you.svg" alt="Illustration thank you" width={"162"} height={"108"}/>
                <div className="header__stars"><p>You selected {currentNumber} out of 5</p></div>
            </section>
        )
    }
}