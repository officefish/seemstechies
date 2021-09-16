import tw from "tailwind-styled-components";

const StyledButton = tw.button`
    px-3 
    py-1
    text-text-base
    rounded-md 
    bg-primary  
`

const Button = ({ children, ...rest }) => {
    return (
        <button className='rounded-md bg-primary text-text-base px-3 py-1 hover:bg-secondary'>
            {children}
        </button>
    );
};

export default Button;