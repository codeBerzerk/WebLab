import React from 'react';
import "../../../../styles/_founders.scss"
import YaroslavPhoto from "../../../images/Team/Yaroslav.png"
import {t} from "i18next";

function Yaroslav() {
    return(
        <div className="founder-container" style={{marginTop: '550px'}}>
            <img className="founder-container__img" src={YaroslavPhoto} alt="Yaroslav"/>
            <div className="founder-container__name">{t('Yaroslav_name')}</div>
            <div className="founder-container__title">{t('Yaroslav_position')}</div>
        </div>
    );
}

export default Yaroslav