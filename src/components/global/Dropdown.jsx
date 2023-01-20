import { useState } from "react"
import Link from "next/link"
import Button from "./Button"

export default function Dropdown (props) {

    const [dropdownToggle, setDropdownToggle] = useState(false)

    return (
        <div>
            <Button 
                text={props.dropdownTitle}
                textClassName={props.btnTextClassName}
                className={props.btnClassName}
                fontSize={props.btnTextFontSize}
                onClick={() => setDropdownToggle(!dropdownToggle)}
                borderRadius={'0.25rem 0.25rem 0 0'}
            />
            {dropdownToggle ? 
                <DropdownList 
                    dropdownData={props.dropdownData}
                />
            : 
            <></>
            }
        </div>
    )
}

function DropdownList (props) { 
        
    return (
        <>
            {props.dropdownData.map((item, index) => (
                <ul key={index} className={`dropdown-list ${props.dropdownListClassName}`}>
                    <DropdownItem title={item.name} link={item.link}/>
                </ul>
            ))}
        </>
    )
}

function DropdownItem (props) {

    return (
        <Link href={`${props.link}`}><li>{props.title}</li></Link>
    )
}