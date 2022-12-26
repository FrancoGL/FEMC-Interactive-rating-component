import {useContext} from "react";
import {CardContext} from "../../context/CardContext.jsx";

export const CardHeader = () => {
    const {submitState, currentNumber} = useContext(CardContext)

    if (!submitState) {
        return (
            <section className={"card__header"}>
                <img src="/icon-star.svg" alt="Icon star" className={"header__img"}/>
            </section>
        )
    } else {
        return (
            <section className={"card__header alter"}>
                <img src="/illustration-thank-you.svg" alt="Illustration thank you"/>
                <div className="header__stars"><p>You selected {currentNumber} out of 5</p></div>
            </section>
        )
    }
}