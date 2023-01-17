import React from 'react'

function BtnText(props) {
  return (
    <p style={{textAlign: props.textAlign ? props.textAlign : 'center'}} className={props.textClassName}>{props.text ? props.text : 'text'}</p>
  )
}

export default BtnText