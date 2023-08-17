import { useState } from "react";
import { AuthInput, AuthInputWrapper, ErrorText, LabelFont, VisibilityWrapper } from "../GlobalStyles";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

export const AuthInputComponent = ({ label, name, type, value, onChange, error }) => {
  const [ showPassword, setShowPassword ] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <LabelFont>
        <span>{label}</span> {error && <ErrorText>{error}</ErrorText>}
      </LabelFont>
      <AuthInputWrapper>
        <AuthInput
          placeholder={`Enter your ${label?.toLowerCase()}`}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <VisibilityWrapper onClick={togglePasswordVisibility}>
            {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
          </VisibilityWrapper>
        )}
      </AuthInputWrapper>
    </div>
  );
};
