import { OverallContainer } from "../../GlobalStyles";
import { SignUpForm } from "../signUp/SignUpStyled";
import { ColumnBody, Half1, Half2 } from "./LogInStyled";
import logo from "../../assets/3scorerslogo.png"
import { useState } from "react";
import useForm from "../../hooks/useForm";
import { Validation } from "../../utils/validation";
import { AuthInputComponent } from "../../components/AuthInputComponent";
import AuthButton from "../../components/AuthButton";
import { ImSpinner6 } from "react-icons/im";
import AuthHandler from "../../utils/AuthHandler";

export const LogIn = () => {
    const [loading, setLoading] = useState(false);
    const {inputs, formErrors, disabledButton, setInputs, setDisabledButton,
           setFormErrors, handleInputChange} = useForm({email: "", password: "",}, Validation, "login");

    const logInUrl = process.env.REACT_APP_LOGIN_API_URL;

    const inputField = [
      {
        label: "Email",
        name: "email",
        type: "email",
        value: inputs.email,
        error: formErrors.email,
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        value: inputs.password,
        error: formErrors.password,
      },
    ];

    const { handleAuth } = AuthHandler({
        apiUrl: logInUrl, path: "/overview",
        successful: "Logged In Successfully", inputs, setInputs, formType: "login",
        setLoading, setDisabledButton, setFormErrors
    })
    return (
        <OverallContainer>
            <ColumnBody>
                <Half1>
                 <img src={logo} alt="3scorers-logo" />
                </Half1>
                <Half2>
                  <SignUpForm onSubmit={handleAuth}>
                  {inputField.map((field, index) => (
                        <AuthInputComponent key={index} placeholder={field.placeholder}
                            label={field.label} name={field.name} type={field.type}
                            value={inputs[field.name]} onChange={handleInputChange}
                            error={formErrors[field.name]} />
                       ))}
                       <AuthButton marginTop="8rem" description={loading ? <ImSpinner6 /> : "Log In"} handleDisabled={disabledButton}/>
                  </SignUpForm> 
                </Half2>
            </ColumnBody>
        </OverallContainer>
    )
};