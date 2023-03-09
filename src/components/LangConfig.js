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

                our_approach__title: "Наш підхід",
                our_approach__step_container__title1: "ПРОФЕСІЙНЕ ВИВЧЕННЯ УСІХ ТОНКОСТЕЙ ВАШОГО БІЗНЕСУ.",
                our_approach__step_container__description1: "Саме так, ми аналізуємо Ваш товар чи послугу, Ваших конкурентів, та Ваших клієнтів, задля того, щоб розробити сайт, який буде відрізнятися від інших сайтів конкурентів  своєю оригінальністю та практичністю.",

                our_approach__step_container__title2: "СУЧАСНИЙ ТА ІНДИВІДУАЛЬНИЙ ДИЗАЙН",
                our_approach__step_container__description2: "Розробляємо дизайн, що запам‘ятовується. Це робиться не тільки для того, щоб була красива картинка, а й для того, щоб, якщо ваш клієнт захотів подивитися, що ж там у конкурентів, він завжди тримав у голові саме ваш сайт.",

                our_approach__step_container__title3: "ІДЕАЛЬНА АДАПТИВНА ВЕРСТКА.",
                our_approach__step_container__description3: "Максимальна зручність користування та зображення на всіх браузерах або мобільних гаджетах мотивує користувача повертатися на ваш сайт знову.",

                our_approach__step_container__title4: "КОМПЛЕКСНІ ПОСЛУГИ ІНТЕРНЕТ-МАРКЕТИНГУ.",
                our_approach__step_container__description4: "Точне охоплення цільового трафіку та індивідуальна стратегія просування приведе  \"солоденьких\" клієнтів у ваш бізнес.",

                Bohdan_name: "Богдан",
                Bohdan_position: "Тім лід",
                Maria_name: "Марія",
                Maria_position: "Дизайнер",
                Yaroslav_name: "Ярослав",
                Yaroslav_position: "Маркетолог",

                services_title: "Послуги",

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

                our_approach__title: "Náš přístup",

                our_approach__step_container__title1: "Profesionální studium všech jemností vašeho podnikání.",
                our_approach__step_container__description1: "Správně, analyzujeme váš produkt nebo službu, vaše konkurenty a vaše zákazníky, kvůli vývoji webu, který se bude lišit od stránek jiných konkurentů s jeho originalitou a praktičností.",

                our_approach__step_container__title2: "Moderní a individuální design",
                our_approach__step_container__description2: "Vyvíjíme nezapomenutelný design. To není jen proto, aby vytvořil krásný obrázek, ale také vidět, jak váš klient vidí, jaké konkurenty tam byli, vždy si udržoval vaše stránky v hlavě.",

                our_approach__step_container__title3: "Ideální adaptivní rozložení",
                our_approach__step_container__description3: "Maximální pohodlí používání a obrazu ve všech prohlížečích nebo mobilních pomůckách motivuje uživatele, aby se znovu vrátil na váš web.",

                our_approach__step_container__title4: "Komplexní služby internetového marketingu.",
                our_approach__step_container__description4: "Přesné pokrytí cílového provozu a individuální propagační strategie povede k „sladkým“ zákazníkům do vašeho podnikání.",

                Bohdan_name: "Bohdan",
                Bohdan_position: "Vedení týmu",

                Maria_name: "Maria",
                Maria_position: "Návrhář",

                Yaroslav_name: "Yaroslav",
                Yaroslav_position: "Marketér",

                services_title: "Služby",

            }
        },
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
