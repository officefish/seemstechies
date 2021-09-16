import tw from "tailwind-styled-components";
import themeProps from "../themeProps";

const StyledButton = tw.button`
    bg-primary
    hover:bg-primary-light
    px-3 py-1 
    rounded-md 
    text-primary 
    focus:outline-none
`

const Button = ({ children, color, onClick, ...rest }) => {
    return (
        // <StyledButton onClick={onClick} color={color}>
        //     {children}
        // </StyledButton>
        <button onClick={onClick} className={`rounded-md bg-${color} hover:bg-${color}-light text-text-base px-3 py-1`} {...rest}>
            {children}
        </button>
    );
};

//Button.propTypes = {
//    ...themeProps,
//};

Button.defaultProps = {
    color: "primary",
};

export default Button;