import {CardHeader} from "./CardHeader.jsx";
import {CardBody} from "./CardBody.jsx";

export const Card = () => {
    return (
        <section className={"card"}>
            <CardHeader></CardHeader>
            <CardBody></CardBody>
        </section>
    )
}