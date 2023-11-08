import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../images/logo1.svg'
import mapArrow from '../../images/navigation.svg'
import loupe from '../../images/search.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <button className={styles.header__button}></button>
        <Link className={styles.link} to="/">
          <img className={styles.header__logo} src={logo} alt="Логотип." />
        </Link>
      </div>
      <div className={styles.header__search}>
        <img className={styles.header__loupe} src={loupe} alt="Логотип." />
        <input
          className={styles.header__input}
          type="text"
          id="search"
          name="search"
          placeholder="Поиск"
          required
        ></input>
      </div>
      <div className={styles.header__info}>
        <img className={styles.header__arrow} src={mapArrow} alt="Стрелка." />
        <p className={styles.header__text}>Санкт-Петербург</p>
        <Link className={styles.header__text_type_signin} to="/signin">
          ВОЙТИ
        </Link>
      </div>
    </header>
  )
}

export default Header
