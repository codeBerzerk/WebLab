import React from 'react';
import "../Founders.scss"
import MariaPhoto from "../../../images/Team/Maria.png"

function Maria() {
    return(
        <div className="founder-container" style={{marginTop: '550px'}}>
            <img className="founder-container__img" src={MariaPhoto} alt="Maria"/>
            <div className="founder-container__name">Марія</div>
            <div className="founder-container__title">Дизайнер</div>
        </div>
    );
}

export default Maria