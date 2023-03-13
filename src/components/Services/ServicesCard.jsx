import React, { useState } from 'react';
import "../../styles/reset.css"
import "../../styles/_servicesCard.scss"
import {useTranslation} from "react-i18next";

function ServicesCard({ title, description, price, remark }) {
    const [lang, setLang] = useState("ua");
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useTranslation();

    return (

        <div
            className={`card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
                <span className="card__main-info">
                    <h2 className="card__title">{title}</h2>
                    <div className="card__price">
                        <p>{t("from")} {price}$</p>
                        <p>{remark}</p>
                    </div>
                </span>
                <div className="card__description">{description}</div>
            </div>
    );
}

export default ServicesCard;