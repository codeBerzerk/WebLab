import React from "react";
import {Translation} from "react-i18next";
import "./components/main.css"
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";

export default function App() {
    return (
        <>
            <Translation>
                {t => <Header t={t}/>}
            </Translation>
            <Translation>
                {t => <AboutUs t={t}/>}
            </Translation>
        </>
    );
}
