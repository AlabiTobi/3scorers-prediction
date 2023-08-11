import { useState } from "react";

const useForm = (initialInputs, validationFunction) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [formErrors, setFormErrors] = useState({});
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newInputs = { ...inputs, [name]: value };
    setInputs(newInputs);

    const errors = validationFunction(newInputs);
    setFormErrors(errors);

    const isFilled = Object?.values(newInputs)?.every((val) => val?.trim() !== "");
    setAllFieldsFilled(isFilled);
    setDisabledButton(!isFilled || Object?.keys(errors)?.length > 0);
  };

  return {
    inputs,
    formErrors,
    allFieldsFilled,
    disabledButton,
    handleInputChange,
  };
};

export default useForm;
