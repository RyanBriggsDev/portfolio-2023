import Button from './Button'
import Dropdown from './Dropdown'

export default function Header (props) {

    return (
        <div className={`header ${props.className ? props.className : ''}`}>
            <h1 className={props.h1ClassName}>{props.h1 ? props.h1 : 'h1'}</h1>
            <p className={props.labelClassName ? props.labelClassName : ''}>{props.label ? props.label : 'label'}</p>
            {props.btnText ? 
                <Button 
                    text={props.btnText}
                    textClassName={props.textClassName}
                    className={props.btnClassName}
                    fontSize={props.btnFontSize}
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