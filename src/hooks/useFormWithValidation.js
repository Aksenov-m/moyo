import React, { useEffect, useCallback } from "react";

export default function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "email") {
      const isValidEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/.test(value);
      setErrors({ ...errors, [name]: isValidEmail ? "" : "Введите корректную почту" });
    }
    if (name === "password") {
      const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$%&_#]).{8,}$/.test(value);
      setErrors({ ...errors, [name]: isValidPassword ? "" : "Пароль должен содержать минимум 8 символов" });
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
    }
    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
