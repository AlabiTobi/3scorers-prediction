import { useState } from "react";

const useForm = (initialInputs, validationFunction, formType) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [formErrors, setFormErrors] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newInputs = { ...inputs, [name]: value };
    setInputs(newInputs);

    const errors = validationFunction(newInputs, formType);
    setFormErrors(errors);

    const isFilled = Object?.values(newInputs)?.every((val) => val?.trim() !== "");
    setDisabledButton(!isFilled || Object?.keys(errors)?.length > 0);
  };

  return { inputs, formErrors, setFormErrors,
    setDisabledButton, setInputs,
    disabledButton, handleInputChange,
  };
};

export default useForm;
