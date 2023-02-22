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
            }
        },
        cz: {
            translation: {
                header__about_us: "O nás",
                header__services: "Služby",
                header__contact: "Kontakty",

                order_a_service: "Objednat službu",
            }
        },
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
