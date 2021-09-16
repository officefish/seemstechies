import './styles/tailwind.css';
import React from "react";
import Button from "./components/button/Button";
import {DivFlxFllScrn} from "./components/styled/display/display";

import { useEffect } from "react";
import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";
import darkTheme from "./themes/dark";

const App = () => {

    useEffect(() => {
        applyTheme(baseTheme);
    }, []);

    const baseClickHandle = () => {
        applyTheme(baseTheme)
    }

    const darkClickHandle = () => {
        applyTheme(darkTheme)
    }

    return <DivFlxFllScrn>
        <Button onClick={ baseClickHandle } >Base theme</Button>
        <Button onClick={ darkClickHandle } color="secondary">
            Dark theme
        </Button>
    </DivFlxFllScrn>
}
export default App;


