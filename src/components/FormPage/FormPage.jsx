import React, { useEffect } from 'react'
import { Form } from 'react-router-dom'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import styles from './FormPage.module.css'
import Button from '../Button/Button'
import ButtonLink from '../ButtonLink/ButtonLink'
import LinkСomponent from '../Link/Link'
import Header from '../Header/Header.jsx'
import logo from '../../images/logo2.svg'
import vk from '../../images/vk.svg'
import google from '../../images/google.svg'
import ya from '../../images/ya.svg'

const FormComponent = ({ errorMessage }) => {
  const {
    values,
    handleChange,
    resetForm,
    isValid,
    errors,
  } = useFormWithValidation()

  useEffect(() => {
    resetForm()
  }, [resetForm])

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <img className={styles.formLogo} src={logo} alt="Логотип." />
        <Form className={styles.form} method="post">
          <div className={styles.formContainer}>
            <label className={styles.formLabel}>
              <input
                value={values.email || ''}
                onChange={handleChange}
                required
                placeholder="Email"
                type="email"
                name="email"
                className={styles.inputField}
              />
            </label>
            {errors.email && (
              <span className={styles.inputError}>{errors.email}</span>
            )}
            <label className={styles.formLabel}>
              <input
                value={values.password || ''}
                onChange={handleChange}
                required
                placeholder="Пароль"
                type="password"
                name="password"
                className={`${styles.inputField} ${
                  !isValid && Object.keys(values).length > 0
                    ? styles.inputField_type_error
                    : ''
                }`}
              />
            </label>
            {errors.password && (
              <span className={styles.inputError}>{errors.password}</span>
            )}
          </div>
          <span className={styles.inputError}>
            {!isValid && Object.keys(values).length > 0 ? errorMessage : ''}
          </span>
          <div
            className={`${styles.formButtons} ${
              errorMessage && errors.password ? styles.error : ''
            }`}
          >
            <Button isDisabled={!isValid} isType="submit" text="ВОЙТИ"></Button>
          </div>
        </Form>
        <LinkСomponent text="Забыли пароль?" to="/pass" />
        <div className={styles.formLink}>
          <ButtonLink href="https://vk.com/" src={vk} />
          <ButtonLink href="https://www.google.com/" src={google} />
          <ButtonLink href="https://ya.ru/" src={ya} />
        </div>
        <LinkСomponent
          text="Ещё нет аккаунта?"
          tag="form__reference_color_grey"
          to="/registration"
        />
        <LinkСomponent text="Зарегистрироваться" to="/registration" />
      </main>
    </>
  )
}

export default FormComponent
