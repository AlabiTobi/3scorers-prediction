import { FormButton } from "../GlobalStyles";

const AuthButton = ({ buttonType = "submit", description, handleDisabled, marginTop}) => {
    return (
        <>
            <FormButton style={{marginTop: marginTop}} disabled={handleDisabled} type={buttonType}>
                {description}
            </FormButton>
        </>
    )
};

export default AuthButton;