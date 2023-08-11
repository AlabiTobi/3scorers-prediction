import { FormButton } from "../GlobalStyles";

const AuthButton = ({ buttonType = "submit", description,  handleDisabled}) => {
    return (
        <>
            <FormButton disabled={handleDisabled} type={buttonType}>{description}</FormButton>
        </>
    )
};

export default AuthButton;