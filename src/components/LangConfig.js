import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    lng: "ua",
    resources: {
        ua: {
            translation: {
                header__about_us: "Про нас",
                header__services: "Послуги",
                header__contact: "Контакти",

                order_a_service: "Замовити послугу",

                aboutUs__text_title: "Ми - команда WebLab",
                aboutUs__text_description: "Яка не просто створює сайти та налаштовує рекламу, а створює ваш унікальний імідж. Співпрацюючи з нами ви обираєте найсучасніші та найефективніші рішення серед конкурентів вашої галузі.",

            }
        },
        cz: {
            translation: {
                header__about_us: "O nás",
                header__services: "Služby",
                header__contact: "Kontakty",

                order_a_service: "Objednat službu",

                aboutUs__text_title: "Jsme - tým WebLab",
                aboutUs__text_description: "Což nejen vytváří stránky a upravuje reklamu, ale také vytváří vaši jedinečnou image. Spoluprací s námi si vybíráte nejmodernější a nejefektivnější řešení mezi konkurenty ve vašem oboru.",

            }
        },
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
