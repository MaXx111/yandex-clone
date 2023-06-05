interface AdsProps{
    children?: any
    imgLink: string
    classCSS: string
}


function Ads({imgLink, children, classCSS} : AdsProps) {

    return(
        <div>
            <img className={classCSS} src={imgLink} alt=""/>
            {children}
        </div>
    )
}

export default Ads