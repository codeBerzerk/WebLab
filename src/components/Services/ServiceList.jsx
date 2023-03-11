import React from "react";
import ServiceCard from "./ServicesCard";
import {useTranslation} from "react-i18next";
import Line_3 from "../images/Sprites/Line_3";
import "../../styles/_servicesList.scss"

function ServiceList() {
    const {t} = useTranslation();
    const data = [
        {
            title: `${t('card_site_title')}`,
            description: `${t('card_site_description')}`,
            price: `${t('card_site_price')}`,
        },
        {
            title: `${t('landing_title')}`,
            description: `${t('landing_description')}`,
            price: `${t('landing_price')}`,
        },
        {
            title: `${t('corporate_title')}`,
            description: `${t('corporate_description')}`,
            price: `${t('corporate_price')}`,
        },
        {
            title: `${t('shop_title')}`,
            description: `${t('shop_description')}`,
            price: `${t('shop_price')}`,
        },
        {
            title: `${t('logo_title')}`,
            description: `${t('logo_description')}`,
            price: `${t('logo_price')}`,
        },
        {
            title: `${t('additional_title')}`,
            description: `${t('additional_description')}`,
            price: `${t('additional_price')}`,
        },
        {
            title: `${t('ad_title')}`,
            description: `${t('ad_description')}`,
            price: `${t('ad_price')}`,
            remark: `${t('ad_remark')}`,
        },
    ];
    return (
        <div className="services" id="services">
            <Line_3/>
            <div className="services__title">{t("services_title")}</div>
            {data.map((item, index) => (
                <ServiceCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    remark={item.remark}
                />
            ))}
            <div className="services__pulse"></div>
        </div>
    );
}

export default ServiceList