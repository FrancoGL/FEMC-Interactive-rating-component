import {CardHeader} from "./CardHeader.jsx";
import {CardBody} from "./CardBody.jsx";

export const Card = () => {
    return (
        <main className={"card"}>
            <CardHeader></CardHeader>
            <CardBody></CardBody>
        </main>
    )
}