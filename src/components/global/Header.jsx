import Button from './Button'
import Dropdown from './Dropdown'

export default function Header (props) {

    return (
        <div className={`header ${props.className ? props.className : ''}`}>
            {props.h1 ? <h1 className={props.h1ClassName}>{props.h1 ? props.h1 : 'h1'}</h1> : <></>}
            {props.h2 ? <h2 className={props.h2ClassName}>{props.h2 ? props.h2 : 'h2'}</h2> : <></>}
            {props.h3 ? <h3 className={props.h3ClassName}>{props.h3 ? props.h3 : 'h3'}</h3> : <></>}
            <p className={props.labelClassName ? props.labelClassName : ''}>{props.label ? props.label : 'label'}</p>
            {props.btnText ? 
                <Button 
                    text={props.btnText}
                    textClassName={props.textClassName}
                    className={props.btnClassName}
                    fontSize={props.btnFontSize}
                    href={props.href}
                    onClick={props.btnOnClick}
                /> : <></>
            }
            {props.dropdownTitle ? 
                <Dropdown 
                    dropdownTitle={props.dropdownTitle}
                    btnTextClassName={props.dropdownBtnTextClassName}
                    btnClassName={props.dropdownBtnClassName}
                    btnTextFontSize={props.dropdownBtnTextFontSize}
                    dropdownData={props.dropdownData}
                    dropdownClassName={props.dropdownClassName}
                /> : <></>
            }
        </div>
    )
}