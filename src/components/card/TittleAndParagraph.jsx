export const TittleAndParagraph = ({isAlter}) => {

    const title = "How did we do?";
    const paragraph = `Please let us know how we did with your support request. All feedback
                    is appreciated
                    to help us improve our offering!`;
    const titleAlter = "Thank you!";
    const paragraphAlter = `We appreciate you taking the time to give a rating. If you ever need
                more support,
                don’t hesitate to get in touch!`;

    return (
        <>
            <h1 className={isAlter ? "body__title alter" : "body__title"}>{isAlter ? titleAlter : title}</h1>
            <p className={isAlter ? "body__paragraph alter" : "body__paragraph"}>{isAlter ? paragraphAlter : paragraph}</p>
        </>
    )
}