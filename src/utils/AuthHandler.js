import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Validation } from "../utils/validation";

const AuthHandler = ({ apiUrl, path, inputs, setInputs, setLoading, setFormErrors, setDisabledButton, formType }) => {
  const navigate = useNavigate();

  const clearInputFields = () => {
    const emptyInputs = Object.fromEntries(
      Object.keys(inputs).map((key) => [key, ""])
    );
    setInputs(emptyInputs);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const errors = Validation(inputs, formType);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
    } else {
      setFormErrors(errors);
      setDisabledButton(true);
    }
    try {
      const { data } = await axios.post(
        apiUrl,
        {...inputs},
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Sign Up Successful!");
      clearInputFields();
      navigate(path);
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
      setDisabledButton(false);
    }
  };

  return {
    handleAuth,
  };
};

export default AuthHandler;
