import './styles/tailwind.css';
import React from "react";
import Button from "./ui/button/Button";
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
        <Button onClick={ baseClickHandle } label={'Base theme'} />
        <Button onClick={ darkClickHandle } label={'Dark theme'} primary={false} />
    </DivFlxFllScrn>
}
export default App;


