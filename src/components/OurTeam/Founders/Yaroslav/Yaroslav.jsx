import React from 'react';
import "../Founders.scss"
import YaroslavPhoto from "../../../images/Team/Yaroslav.png"

function Yaroslav() {
    return(
        <div className="founder-container" style={{marginTop: '550px'}}>
            <img className="founder-container__img" src={YaroslavPhoto} alt="Yaroslav"/>
            <div className="founder-container__name">Ярослав</div>
            <div className="founder-container__title">Маркетолог</div>
        </div>
    );
}

export default Yaroslav