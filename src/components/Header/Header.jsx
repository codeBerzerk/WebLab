import React, {useState} from 'react';
import '../../styles/reset.css'
import '../../styles/_header.scss'
import i18n from 'i18next';
import {useTranslation} from "react-i18next";

export default function Header() {
    const [lang, setLang] = useState("ua");
    const { t } = useTranslation();

    const langChange = lang => {
            localStorage.setItem("lang", lang);
            const savedLang = localStorage.getItem("lang");
            i18n.changeLanguage(savedLang);
        }

        const handlerClick = lang => {
            setLang(lang);
            langChange(lang)
        }
        return (
            <header className="header">
        <span>
          <div className="header__name">WebLab</div>
          <div className="header__lang-switcher">
            <button
                onClick={() => handlerClick("ua")}
                className={`header__lng-button ${
                    lang === "ua" ? "header__lng-checked" : ""
                }`}
                value={lang === "ua" ? "active" : ""}
            >
              UA
            </button>
            <button
                onClick={() => handlerClick("cz")}
                className={`header__lng-button ${
                    lang === "cz" ? "header__lng-checked" : ""
                }`}
                value={lang === "cz" ? "active" : ""}
            >
              CZ
            </button>
          </div>
        </span>

                <ul className="header__nav-list">
                    <li>
                        <a href={"#aboutUs"}>{t("header__about_us")}</a>
                    </li>
                    <li>
                        <a href={"#services"}>{t("header__services")}</a>
                    </li>
                    <li>
                        <a href={"#contacts"}>{t("header__contact")}</a>
                    </li>
                </ul>
            </header>
        );
}

