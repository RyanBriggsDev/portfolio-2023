import BtnText from './BtnText'


function Button(props) {

    const styles = {
        button: {
            borderRadius: props.borderRadius ? props.borderRadius : '0.5rem',
            padding: props.padding ? props.padding : '0.5rem 1.5rem',
            cursor: 'pointer',
            border: 'none',
            width: props.width ? props.width : 'auto',
        }
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
        />
    </button>
  )
}

export default Button