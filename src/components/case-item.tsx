interface CaseItemProps {
    title: string
    children: any
}

function CaseItem({title, children}: CaseItemProps) {

    return (
        <div className='case-item'>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default CaseItem