import styles from './Button.module.css'

const Button = ({ tag, text, handleClick, isType, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      type={isType}
      onClick={handleClick}
      className={`${styles.button} ${styles[tag]}`}
    >
      {text}
    </button>
  )
}

export default Button
