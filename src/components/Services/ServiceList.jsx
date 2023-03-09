import React from "react";
import ServiceCard from "./ServicesCard";
import {useTranslation} from "react-i18next";
import Line_3 from "../images/Sprites/Line_3";
import "../../styles/_servicesList.scss"

const data = [
    {
        title: 'Сайт-візитка',
        description: 'Такі сайти дуже популярні та користуються великим попитом, оскільки підходять для успішної комерційної діяльності ',
        price: '300',
    },
    {
        title: 'Лендинг',
        description: 'Такі сайти дуже популярні та користуються великим попитом, оскільки підходять для успішної комерційної діяльності ',
        price: '350',
    },
    {
        title: 'Корпоративний сайт',
        description: 'Такі сайти дуже популярні та користуються великим попитом, оскільки підходять для успішної комерційної діяльності ',
        price: '750',
    },
    {
        title: 'Інтернет магазин',
        description: 'Такі сайти дуже популярні та користуються великим попитом, оскільки підходять для успішної комерційної діяльності ',
        price: '1000',
    },
    {
        title: 'Розробка логотипу',
        description: 'Такі сайти дуже популярні та користуються великим попитом, оскільки підходять для успішної комерційної діяльності ',
        price: '100',
    },
    {
        title: 'Дод. послуги',
        description: 'Такі сайти дуже популярні та користуються великим попитом, оскільки підходять для успішної комерційної діяльності ',
        price: '15',
    },
    {
        title: 'Просування сайту',
        description: 'Такі сайти дуже популярні та користуються великим попитом, оскільки підходять для успішної комерційної діяльності ',
        price: '300',
        remark: '(+рекламний бюджет)',
    },
];

function ServiceList() {
    const { t } = useTranslation();
    return (
        <div className="services">
            <Line_3 />
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