export default function Container ( { children, style, className } ) {

    return (
        <div className={`container ${className ? className : ''}`} style={style}>
            {children}
        </div>
    )
}