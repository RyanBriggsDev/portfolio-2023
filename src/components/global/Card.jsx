export default function Card ({ 
    cardBorder, 
    cardPadding, 
    cardBgHover, 
    cardRounded, 
    cardCenter,
    cardBgImg,
    cardBg,
    className, 
    minHeight,
    backgroundClassName,
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
                `}
            onClick={onClick}
            style={style}
        >
            <div
                style={{
                    backgroundImage: `url(${cardBgImg ? cardBgImg.src : ''})`,
                    minHeight: `${minHeight ? minHeight : ''}`,
                    backgroundColor: `${cardBg ? cardBg : ''}`,
                }}
                className=
                    {
                        `font-1 h-100
                        ${cardBorder ? 'card-border-true' : ''}
                        ${cardPadding ? 'card-padding-true' : ''}
                        ${cardRounded ? 'card-rounded-true' : ''}
                        ${cardBgHover ? 'card-bg-hover' : ''}
                        ${cardCenter ? 'flex f-d-col items-center justify-center' : ''}
                        ${onClick ? 'pointer' : ''}
                        ${backgroundClassName ? backgroundClassName : ''}
                        `
                    }
                >
                {children}
            </div>
        </div>
    )
}