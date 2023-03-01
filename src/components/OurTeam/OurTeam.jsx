import React from 'react';
import "../../styles/reset.css"
import "./OurTeam.scss"
import Line_2 from "../images/Sprites/Line_2";
import Bohdan from "./Founders/Bohdan/Bohdan";
import Yaroslav from "./Founders/Yaroslav/Yaroslav";
import Maria from "./Founders/Maria/Maria";
export default class OurTeam extends React.Component {
    state = {
        lang: "ua"
    };

    render() {
        const {t} = this.props;
        return (
            <div className="our-team">
                <Line_2/>
                <Yaroslav/>
                <Bohdan/>
                <Maria/>
                <div className="our-team__animation"></div>
            </div>
        );

    }
}