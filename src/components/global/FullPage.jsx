export default function FullPage ({children, id, style, className, refProp}) { 

    return (
        <div ref={refProp} id={id ? id : ''} className={`full-page flex f-center w-100 f-d-col ${className ? className : ''}`} style={style ? style : null}>
            {children}
        </div>
    )
}