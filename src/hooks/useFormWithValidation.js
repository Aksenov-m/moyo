import React, { useEffect, useCallback } from "react";

export default function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "tel") {
      const isValidPhoneNumber = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(value);
      setErrors({ ...errors, [name]: isValidPhoneNumber ? "" : "Введите корректный номер +7(999)999-99-99" });
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