import Button from './Button'

export default function Header (props) {

    return (
        <div className={`header ${props.className}`}>
            <h1>{props.h1 ? props.h1 : 'h1'}</h1>
            <p>{props.label ? props.label : 'label'}</p>
            <Button 
                text={props.btnText}
                textClassName={props.textClassName}
                className={props.btnClassName}
                fontSize={props.btnFontSize}
                onClick={props.btnOnClick}
            />
        </div>
    )
}