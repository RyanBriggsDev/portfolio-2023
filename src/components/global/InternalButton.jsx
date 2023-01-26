import Link from "next/link"

export default function Button(props) {

    const styles = {
        button: {
            borderRadius: props.borderRadius ? props.borderRadius : '0.25rem',
            padding: props.padding ? props.padding : '0.5rem 1.5rem',
            cursor: 'pointer',
            border: 'none',
        }
    }

  return (
    <Link href={props.href} scroll={false}>
        <button 
            style={styles.button}
            className={props.className}
        >
                <BtnText
                    text={props.text}
                    textClassName={props.textClassName}
                    className={props.className}
                    fontSize={props.fontSize}
                />
        </button>
    </Link>
  )
}

function BtnText(props) {
    return (
      <p style={{textAlign: props.textAlign ? props.textAlign : 'center', fontSize: props.fontSize ? props.fontSize : '1rem'}} className={props.textClassName}>{props.text ? props.text : 'text'}</p>
    )
}