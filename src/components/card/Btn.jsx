export const Btn = ({number, className}) => {
    if (number) {
        return (
            <button className={className}><span>{number}</span></button>
        )
    } else {
        return (
            <button className={className}>Submit</button>
        )
    }
}