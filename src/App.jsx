import './styles/tailwind.css';
import './styles/theme.css'
import React from "react";
// import StyledComponent from "./StyledComponent";
import Button from "./components/button/Button";

class App extends React.Component {

    render () {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <Button>Themed Button</Button>
            </div>
        );
    }
}
export default App;
