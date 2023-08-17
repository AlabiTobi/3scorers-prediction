import { ViewButton } from "../GlobalStyles";

const ViewButtonComponent = ({description = "View Details", background, color}) => {
    return (
        <>
            <ViewButton background={background} color={color}>
                {description}
            </ViewButton>
        </>
    )
};

export default ViewButtonComponent;