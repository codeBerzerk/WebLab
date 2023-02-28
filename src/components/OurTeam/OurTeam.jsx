import React from 'react';
import "../../styles/reset.css"
import "./OurTeam.scss"
import Line_2 from "../images/Line_2";
export default class OurTeam extends React.Component {
    state = {
        lang: "ua"
    };

    render() {
        const {t} = this.props;
        return (
            <div className="our-team">
                <Line_2/>
            </div>
        );

    }
}