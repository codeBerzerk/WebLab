import React from 'react';
import "../../../../styles/_founders.scss"
import BohdanPhoto from "../../../images/Team/Bohdan.png"
import {t} from "i18next";

export default function Bohdan() {

        return (
            <div className="founder-container">
                <img className="founder-container__img" src={BohdanPhoto} alt="Bohdan"/>
                <div className="founder-container__name">{t('Bohdan_name')}</div>
                <div className="founder-container__title">{t('Bohdan_position')}</div>
            </div>
        );
}
