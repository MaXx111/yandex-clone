interface TextItemProps {
    text: string
}

function TextItem({text}: TextItemProps) {

    return(
        <>
        <p>{text}</p>
        </>
    )
}

export default TextItem