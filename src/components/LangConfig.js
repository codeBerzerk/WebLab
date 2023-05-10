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

                aboutUs: "Про нас",
                Bohdan_name: "Богдан",
                Bohdan_position: "Тім лід",
                Maria_name: "Марія",
                Maria_position: "Дизайнер",
                Yaroslav_name: "Ярослав",
                Yaroslav_position: "Маркетолог",

                services_title: "Послуги",

                from: "від",

                card_site_title: "Сайт візитка",
                card_site_description: "Такі сайти мають дві - три вебсторінки, на яких міститься основна інформація про компанію. Сайт-візитка має попит, оскільки підходять для успішної комерційної діяльності",
                card_site_price: "300",
                landing_title: "Лендинг",
                landing_description: "Зазвичай лендінг складається з однієї сторінки, яка містить всю необхідну інформацію для користувача про продукт або послугу.",
                landing_price: "350",
                corporate_title: "Корпоративний сайт",
                corporate_description: `Це сайт, який є представником компанії в Інтернеті. Він не інформує, не продає і ` +
                    `навіть не позиціонує вас, як кваліфіковану команду. Корпоративний сайт це все робить одразу та навіть більше.` +
                    `Зазвичай корпоративний сайт допомагає досягти одразу декілька цілей:\n` +
                    `· Розповідає про діяльність компанії про діяльність;\n` +
                    `· Формує неповторний імідж компанії;\n` +
                    `· Презентує товари чи послуги;\n` +
                    `· Збільшувати обсяги ваших продажів, від яких залежить і ваш прибуток;\n`,
                corporate_price: "750",
                shop_title: "Інтернет-магазин",
                shop_description: "Сайт, який торгує за допомогою мережі Інтернет. Дозволяє користувачам онлайн, у своєму браузері, сформувати замовлення на купівлю, вибрати спосіб оплати та доставки замовлення, оплатити замовлення. Наша команда реалізовує всі необхідні функції так, щоб спонукати відвідувачів робити додаткові покупки. Ми робимо роботу з інтернет-магазинами легкою та швидкою.",
                shop_price: "1000",
                logo_title: "Розробка логотипу",
                logo_description: "Індивідуальний та якісний брендинг для вашої компанії\n",
                logo_price: "100",
                additional_title: "Дод. послуги",
                additional_description: "Якісний та надійний хостинг, техпідтримку, наповнення сайту, аналітику.",
                additional_price: "15",
                ad_title: "Просування сайту",
                ad_description: "Інтернет маркетинг - це новий спосіб розповісти потенційним клієнтам про вашу послугу або продукт",
                ad_price: "300",
                ad_remark: "(+рекламний бюджет)",

                contact_name: "ПІБ",
                contact_tel: "Телефон",
                contact_email: "E-mail",
                contact_info: "Додаткова інформація",

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

                aboutUs: "O nás",
                Bohdan_name: "Bohdan",
                Bohdan_position: "Vedoucí týmu",
                Maria_name: "Maria",
                Maria_position: "Návrhář",
                Yaroslav_name: "Yaroslav",
                Yaroslav_position: "Marketér",

                services_title: "Služby",

                from: "od",

                card_site_title: "Web vizitky",
                card_site_description: "Takové stránky mají dvě nebo tři webové stránky, které obsahují základní informace o společnosti. Stránka vizitek je žádaná, protože je vhodná pro úspěšnou komerční činnost",
                card_site_price: "300",
                landing_title: "Jednostránkový web",
                landing_description: "Vstupní stránka se obvykle skládá z jedné stránky, která obsahuje všechny potřebné informace pro uživatele o produktu nebo službě.",
                landing_price: "350",
                corporate_title: "Firemní stránky",
                corporate_description: `Toto je stránka, která reprezentuje společnost na internetu. Neinformuje, neprodává a ` +
                    `Ani vás nestaví jako kvalifikovaný tým. Firemní stránka to všechno dělá najednou a ještě víc `+
                    `Obvykle firemní stránka pomáhá dosáhnout několika cílů najednou:\n` +
                     `· Vypráví o aktivitách společnosti;\n` +
                     `· Tvoří jedinečný obraz společnosti;\n` +
                     `· Prezentuje zboží nebo služby;\n` +
                     `· Chcete-li zvýšit objem vašich prodejů, na kterých závisí také váš zisk;\n`,
                corporate_price: "750",
                shop_title: "Internetový obchod",
                shop_description: "СStránka, která obchoduje pomocí internetu. Umožňuje uživatelům online ve svém prohlížeči vytvořit objednávku, zvolit způsob platby a doručení objednávky, zaplatit za objednávku. Náš tým implementuje všechny potřebné funkce, aby povzbudil návštěvníky k dalším nákupům. Děláme práci s internetovými obchody snadnou a rychlou.",
                shop_price: "1000",
                logo_title: "Rozvoj logotypu",
                logo_description: "Individuální a kvalitní branding pro vaši společnost\n",
                logo_price: "100",
                additional_title: "Doplňkové služby",
                additional_description: "Kvalitní a spolehlivý hosting, technická podpora, obsah stránek, analytika.",
                additional_price: "15",
                ad_title: "Propagace stránek",
                ad_description: "Internetový marketing je nový způsob, jak informovat potenciální zákazníky o vaší službě nebo produktu",
                ad_price: "300",
                ad_remark: "(+reklamní rozpočet)",

                contact_name: "Křestní jméno a příjmení",
                contact_tel: "Telefonní číslo",
                contact_email: "E-mail",
                contact_info: "Dodatečné informace",

            }
        },
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
