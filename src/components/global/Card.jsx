export default function Card ({ 
    cardBorder, 
    cardPadding, 
    cardBg, 
    cardBgHover, 
    cardRounded, 
    cardCenter,
    cardBgImg,
    className, 
    width, 
    onClick,
    style,
    children,
}) {

    return (
        <div 
            className={
                `card
                ${className ? className : ''} 
                ${width ? width : ''}
                ${cardBgImg ? 'divImg' : ''}
                `}
            onClick={onClick}
        >
            <div 
                style={{
                    backgroundImage: `url(${cardBgImg ? cardBgImg.src : ''})`,
                    minHeight: `${cardBgImg ? '20rem' : ''}`
                }}
                className=
                    {
                        `font-1 h-100
                        ${cardBorder ? 'card-border-true' : ''}
                        ${cardPadding ? 'card-padding-true' : ''}
                        ${cardRounded ? 'card-rounded-true' : ''}
                        ${cardBg ? 'card-bg-true' : ''}
                        ${cardBgHover ? 'card-bg-hover' : ''}
                        ${cardCenter ? 'flex f-d-col items-center justify-center' : ''}
                        ${cardBgImg ? 'divImg' : ''}
                        ${onClick ? 'pointer' : ''}
                        `
                    }
                >
                {children}
            </div>
        </div>
    )
}