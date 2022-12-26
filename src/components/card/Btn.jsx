export const Btn = ({number, className}) => {
    if (number) {
        return (
            <button className={className}>{number}</button>
        )
    } else {
        return (
            <button className={className}>Submit</button>
        )
    }
}