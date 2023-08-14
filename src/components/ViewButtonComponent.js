import { ViewButton } from "../GlobalStyles";

const ViewButtonComponent = ({description = "View Details", background}) => {
    return (
        <>
            <ViewButton background={background}>{description}</ViewButton>
        </>
    )
};

export default ViewButtonComponent;