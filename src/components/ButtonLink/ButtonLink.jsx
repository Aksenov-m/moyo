import styles from './ButtonLink.module.css'

const ButtonLink = ({ src, href }) => {
  return (
    <a className={styles.form__link} href={href} target="_blank">
      <img className={styles.form__logo} src={src} alt="Лого." />
    </a>
  )
}

export default ButtonLink
