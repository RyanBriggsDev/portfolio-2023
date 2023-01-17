export default function Container ( {children}, props ) {

    return (
        <div className="container" style={{maxWidth: props.maxwidth}}>
            {children}
        </div>
    )
}