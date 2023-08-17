import { NormalFont, OverallContainer } from "../../GlobalStyles";
import { FirstHalf, SignUpForm, HugeHeaderFont, RowBody, SecondHalf } from "./SignUpStyled";
import logo from "../../assets/3scorerslogo.png";
import { AuthInputComponent } from "../../components/AuthInputComponent";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import { Validation } from "../../utils/validation";
import AuthButton from "../../components/AuthButton";
import { ImSpinner6 } from "react-icons/im";
import AuthHandler from "../../utils/AuthHandler";

export const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const {inputs, formErrors, disabledButton, setInputs, setDisabledButton,
           setFormErrors, handleInputChange} = useForm({firstName: "",
           lastName: "", email: "", username: "", password: "", repeat_password: ""}, Validation, "signup");

    const signUpUrl = process.env.REACT_APP_SIGNUP_API_URL;

    const inputField = [
        {
          label: "First Name",
          name: "firstName",
          type: "text",
          value: inputs.firstName,
          error: formErrors.firstName,
        },
        {
          label: "Last Name",
          name: "lastName",
          type: "text",
          value: inputs.lastName,
          error: formErrors.lastName,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          value: inputs.email,
          error: formErrors.email,
        },
        {
          label: "Username",
          name: "username",
          type: "text",
          value: inputs.username,
          error: formErrors.username,
        },
        {
          label: "Password",
          name: "password",
          type: "password",
          value: inputs.password,
          error: formErrors.password,
        },
        {
          label: "Repeat Password",
          name: "repeat_password",
          type: "password",
          value: inputs.repeat_password,
          error: formErrors.repeat_password,
        },
      ];
    
    const { handleAuth } = AuthHandler({
        apiUrl: signUpUrl, path: "/login",
        successful: "Sign Up Successful!", inputs, setInputs, formType: "signup",
        setLoading, setDisabledButton, setFormErrors
    })

    return (
        <OverallContainer>
            <RowBody>
                <FirstHalf>
                    <img src={logo} alt="3scoreres-logo" />
                    <HugeHeaderFont>Create Account</HugeHeaderFont>
                    <NormalFont>Join the community and have fun predicting!</NormalFont>
                </FirstHalf>
                <SecondHalf>
                    <SignUpForm onSubmit={handleAuth}>
                       {inputField.map((field, index) => (
                        <AuthInputComponent key={index} placeholder={field.placeholder}
                            label={field.label} name={field.name} type={field.type}
                            value={inputs[field.name]} onChange={handleInputChange}
                            error={formErrors[field.name]} />
                       ))}
                       <AuthButton description={loading ? <ImSpinner6 /> : "Sign Up"} handleDisabled={disabledButton}/>
                    </SignUpForm>
                </SecondHalf>
            </RowBody>
        </OverallContainer>
    )
};