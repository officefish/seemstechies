import logo from './logo.svg';
import './styles/tailwind.css';
import tw from 'tailwind-styled-components'
import './styles/theme.css'
import React from "react";
import StyledComponent from "./StyledComponent";
import {setTitle} from "./decorators/@setTitle";

@setTitle(() => 'application main mage')
class App extends React.Component {

    //const [theme, setTheme] = useState(“dark”)

    /*
     const handleSwitchTheme = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark")
     }
    */

    render () {
        return <StyledComponent />
    }


}
export default App;
