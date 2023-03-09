import React from 'react';
import "../../../../styles/_founders.scss"
import MariaPhoto from "../../../images/Team/Maria.png"
import {t} from "i18next";

function Maria() {
    return(
        <div className="founder-container" style={{marginTop: '550px'}}>
            <img className="founder-container__img" src={MariaPhoto} alt="Maria"/>
            <div className="founder-container__name">{t('Maria_name')}</div>
            <div className="founder-container__title">{t('Maria_position')}</div>
        </div>
    );
}

export default Maria