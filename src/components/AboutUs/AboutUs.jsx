import React from "react";
import Logo from "../images/Sprites/Logo";
import Line from "../images/Sprites/Line";
import Dots from "../images/Sprites/Dots";
import '../../styles/reset.css'
import "../../styles/_aboutUs.scss"

export default class AboutUs extends React.Component {
    state = {
        lang: "ua"
    };

    render() {
        const { t } = this.props;
        return (
            <div className="aboutUS">
                <div className="aboutUS__main-animation"></div>
                <Logo/>
                <a href={"#contactForm"} className="aboutUS__button" id="aboutUs" role="button" tabIndex={0}>
                    <p>{t("order_a_service")}</p>
                </a>
                <Dots/>
                <Line/>
                <div className="aboutUS__text">
                    <div className="aboutUS__text-title">{t("aboutUs__text_title")}</div>
                    <div className="aboutUS__text-description">{t("aboutUs__text_description")}</div>
                </div>
                <div className="aboutUS__ball-animation"></div>
                <Dots/>
            </div>
        );
    }
}
