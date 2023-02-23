import React from 'react';
import "../reset.css"
import "./OurApproach.scss"

export default class OurApproach extends React.Component {
    state = {
        lang: "ua"
    };

    render() {
        const {t} = this.props;
        return (
            <div className="our-approach">
                <div className="our-approach__title">Наш підхід</div>
                <div className="our-approach__ball-animation"></div>
            </div>
        );

    }
}