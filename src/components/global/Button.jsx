export default function Button(props) {
  const styles = {
    button: {
      borderRadius: props.borderRadius ? props.borderRadius : '0.25rem',
      padding: props.padding ? props.padding : '0.5rem 1.5rem',
      cursor: 'pointer',
      border: 'none',
    },
  }

  if (props.externalUrl) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer" className="w-100">
        <button
          style={styles.button}
          className={props.className}
          onClick={props.onClick}
        >
          <BtnText
            text={props.text}
            textClassName={props.textClassName}
            className={props.className}
            fontSize={props.fontSize}
          />
        </button>
      </a>
    )
  }

  return (
    <button
      style={styles.button}
      className={props.className}
      onClick={props.onClick}
    >
      <BtnText
        text={props.text}
        textClassName={props.textClassName}
        className={props.className}
        fontSize={props.fontSize}
      />
    </button>
  )
}

function BtnText(props) {
  return (
    <p
      style={{
        textAlign: props.textAlign ? props.textAlign : 'center',
        fontSize: props.fontSize ? props.fontSize : '1rem',
      }}
      className={props.textClassName}
    >
      {props.text ? props.text : 'text'}
    </p>
  )
}
