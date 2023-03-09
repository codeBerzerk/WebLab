import React from 'react';
import "../../styles/reset.css"
import "../../styles/_ourTeam.scss"
import Line_2 from "../images/Sprites/Line_2";
import Bohdan from "./Founders/Bohdan/Bohdan";
import Yaroslav from "./Founders/Yaroslav/Yaroslav";
import Maria from "./Founders/Maria/Maria";
import Dots from "../images/Sprites/Dots";

export default class OurTeam extends React.Component {
    state = {
        lang: "ua"
    };

    render() {
        const {t} = this.props;
        return (
            <>
            <div className="our-team__title">{t('aboutUs')}</div>
            <div className="our-team">

                <Line_2/>
                <div className="our-team__founders">
                <Yaroslav/>
                <Bohdan/>
                <Maria/>
                </div>
                <div className="our-team__dots"><Dots/></div>
                <div className="our-team__animation"></div>
            </div>
            </>
        );

    }
}