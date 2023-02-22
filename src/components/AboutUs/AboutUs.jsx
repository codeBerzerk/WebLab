import React from "react";
import Logo from "../images/Logo";
import Line from "../images/Line";
import Dots from "../images/Dots";
import '../reset.css'
import "./AboutUs.scss"

export default class AboutUs extends React.Component {
    state = {
        lang: "ua"
    };



    render() {
        const { t } = this.props;


        return (
            <div className="aboutUS">
                <div className="aboutUS__animation"></div>
            <Logo/>
                <button className="aboutUS__button">{t("order_a_service")}</button>
                <Dots/>
                <Line/>
                <div className="aboutUS__text">
                    <div className="aboutUS__text-title">{t("aboutUs__text_title")}</div>
                    <div className="aboutUS__text-description">{t("aboutUs__text_description")}</div>
                </div>
            </div>
        );
    }
}