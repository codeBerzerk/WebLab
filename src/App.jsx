import React from "react";
import {Translation} from "react-i18next";
import "./components/main.css"
import Header from "./components/Header/Header";
import LogoBlock from "./components/MainLogoContainer/LogoBlock";

export default function App() {
    return (
        <>
            <Translation>
                {t => <Header t={t}/>}
            </Translation>
            <Translation>
                {t => <LogoBlock t={t}/>}
            </Translation>
        </>
    );
}
