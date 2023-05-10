import React from "react";
import {Translation} from "react-i18next";
import "./styles/main.css"
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import OurApproach from "./components/OurApproach/OurApproach";
import OurTeam from "./components/OurTeam/OurTeam";
import ServiceList from "./components/Services/ServiceList";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <Translation>
                {t => <Header t={t}/>}
            </Translation>
            <Translation>
                {t => <AboutUs t={t}/>}
            </Translation>
            <Translation>
                {t => <OurApproach t={t}/>}
            </Translation>
            <Translation>
                {t => <OurTeam t={t}/>}
            </Translation>
            <Translation>
                {t => <ServiceList t={t}/>}
            </Translation>
            <Translation>
                {t => <ContactForm t={t}/>}
            </Translation>
            <Translation>
                {t => <Footer t={t}/>}
            </Translation>
        </>
    );
}
