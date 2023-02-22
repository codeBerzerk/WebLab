import React from "react";
import Logo from "../images/Logo";
import Line from "../images/Line";
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
            <Line className="aboutUS__line"/>
            </div>
        );
    }
}