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
                <div className="our-approach__title">{t("our_approach__title")}</div>
                <div className="our-approach__ball-animation"></div>
                <div className="our-approach__step-container">
                    <div className="our-approach__step-container__title">

                    </div>
                    <div className="our-approach__step-container__description">

                    </div>
                </div>
            </div>
        );

    }
}