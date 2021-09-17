import PropTypes from "prop-types";
import tw from "tailwind-styled-components"

const StyledButton = tw.button`
    ${(p) => (p.primary ? "bg-primary" : "bg-secondary")}
    ${(p) => (p.primary ? "bg-primary" : "bg-secondary")}
    ${(p) => (p.primary ? "hover:bg-primary-light" : "bg-secondary-light")}
    rounded-md 
    text-white 
    px-3 py-1
    `

const Button = ({ primary, label, onClick, ...props }) => {

    return <StyledButton
            onClick={onClick}
            primary={primary}
            {...props}>
            {label}
        </StyledButton>
};

Button.propTypes = {
    primary:PropTypes.bool,
    label:PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    primary:true,
};

export default Button;