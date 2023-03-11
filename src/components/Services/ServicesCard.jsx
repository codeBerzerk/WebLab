import React, { useState } from 'react';
import "../../styles/reset.css"
import "../../styles/servicesCard.scss"
import {useTranslation} from "react-i18next";

function ServicesCard({ title, description, price, remark }) {
    const [lang, setLang] = useState("ua");
    const { t } = useTranslation();

    return (

            <div className="card">
                <h2 className="card__title">{title}</h2>
                <p className="card__price">
                    <p>{t("from")} {price}$</p>
                    <p>{remark}</p>
                </p>
            </div>
    );
}

export default ServicesCard;