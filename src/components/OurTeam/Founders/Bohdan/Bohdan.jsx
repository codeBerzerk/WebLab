import React from 'react';
import "../Founders.scss"
import BohdanPhoto from "../../../images/Team/Bohdan.png"

function Bohdan() {
    return(
        <div className="founder-container">
            <img className="founder-container__img" src={BohdanPhoto} alt="Bohdan"/>
            <div className="founder-container__name">Богдан</div>
            <div className="founder-container__title">Тім лід</div>
        </div>
    );
}

export default Bohdan