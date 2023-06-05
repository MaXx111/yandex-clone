import { INews } from '../model'

interface SearchProps {
    title: string
}

function Link({ title } : SearchProps) {

    return (
        <>
            <a href="#">{title}</a>
        </>
    )
}

export default Link