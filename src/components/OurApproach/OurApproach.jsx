import React from 'react';
import "../../styles/reset.css"
import "./OurApproach.scss"
import DotsLarge from "../images/Sprites/DotsLarge";
import Dots from "../images/Sprites/Dots";

export default class OurApproach extends React.Component {
    state = {
        lang: "ua"
    };

    render() {
        const {t} = this.props;
        return (<div className="our-approach">
            <div className="our-approach__title">{t("our_approach__title")}</div>
            <div className="our-approach__ball-animation"></div>
                <div className="our-approach__step-container">
                    <span>
                    <div className="our-approach__step-container__title">
                        {t('our_approach__step_container__title1')}
                    </div>
                    <DotsLarge/>
                    </span>
                    <div className="our-approach__step-container__description">
                        {t('our_approach__step_container__description1')}
                    </div>
                </div>
                <div className="our-approach__step-container" style={
                    {display: 'flex', flexDirection: 'column', alignItems: 'flex-end'
                    }}>
                    <span style={{flexDirection: 'row-reverse'}}>
                    <div className="our-approach__step-container__title">
                        {t('our_approach__step_container__title2')}
                    </div>
                    <DotsLarge/>
                    </span>
                    <div className="our-approach__step-container__description" style={{textAlign: 'end'}}>
                        {t('our_approach__step_container__description2')}
                    </div>
                </div>
                <div className="our-approach__step-container">
                    <span>
                    <div className="our-approach__step-container__title">
                       {t('our_approach__step_container__title3')}
                    </div>
                    <DotsLarge/>
                    </span>
                    <div className="our-approach__step-container__description">
                        {t('our_approach__step_container__description3')}
                    </div>
                </div>
            <div className="our-approach__step-container" style={
                {display: 'flex', flexDirection: 'column', alignItems: 'flex-end'
                }}>
                    <span style={{flexDirection: 'row-reverse'}}>
                    <div className="our-approach__step-container__title">
                        {t('our_approach__step_container__title4')}
                    </div>
                    <DotsLarge/>
                    </span>
                <div className="our-approach__step-container__description" style={{textAlign: 'end'}}>
                    {t('our_approach__step_container__description4')}
                </div>
            </div>
            <Dots />
        </div>);

    }
}