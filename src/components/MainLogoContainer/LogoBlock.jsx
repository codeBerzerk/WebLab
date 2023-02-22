import React from "react";
import Logo from "../images/Logo";
import '../reset.css'
import "./LogoBlock.scss"

export default class LogoBlock extends React.Component {
    state = {
        lang: "ua"
    };



    render() {
        const { t } = this.props;


        return (
            <div className="container">
                <div className="container__animation"></div>
            <Logo/>
                <button className="container__button">{t("order_a_service")}</button>
            </div>
        );
    }
}