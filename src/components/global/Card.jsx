export default function Card ({cardBorder, cardPadding, cardBg, cardBgHover, cardRounded, className, width, children}) {

    return (
        <div className={`card ${className ? className : ''} ${width ? width : ''}`}>
            <div className=
            {
                `
                font-1
                ${cardBorder ? 'card-border-true' : ''}
                ${cardPadding ? 'card-padding-true' : ''}
                ${cardRounded ? 'card-rounded-true' : ''}
                ${cardBg ? 'card-bg-true' : ''}
                ${cardBgHover ? 'card-bg-hover' : ''}
                flex f-d-col items-center justify-center
                `
            }
            >
                {children}
            </div>
        </div>
    )
}