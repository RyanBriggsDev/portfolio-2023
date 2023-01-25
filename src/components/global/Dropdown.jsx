import { useState } from "react"
import Link from "next/link"
import Button from "./Button"
import { useRouter } from "next/router"

export default function Dropdown (props) {

    const [dropdownToggle, setDropdownToggle] = useState(false)

    return (
        <>
            {dropdownToggle ? <div onClick={() => setDropdownToggle(false)} className="dropdown-fullpage-close"></div> : ''}
            <div className={`dropdown ${props.dropdownClassName ? props.dropdownClassName : ''}`}>
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
        </>
    )
}

function DropdownList (props) { 
        
    return (
        <ul className={`dropdown-list w-100 ${props.dropdownListClassName ? props.dropdownListClassName : ''}`}>
            {props.dropdownData.map((item, index) => (
                    <DropdownItem key={index} title={item.name} link={item.link}/>
            ))}
        </ul>
    )
}

function DropdownItem ({title, link}) {

    const router = useRouter()

    return (
        <li onClick={() => router.push(`${link}`)} className="dropdown-item w-100">{title}</li>
    )
}