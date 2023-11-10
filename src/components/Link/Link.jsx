import { Link } from 'react-router-dom'
import styles from './Link.module.css'

const LinkСomponent = ({ text, tag, to }) => {
  return (
    <Link className={`${styles.form__reference} ${styles[tag]}`} to={to}>
      {text}
    </Link>
  )
}

export default LinkСomponent
