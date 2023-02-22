import React from 'react';
import '../reset.css'
import './Header.scss'
import i18n from 'i18next';

export default class Header extends React.Component {
    state = {
        lang: "ua",
    };

    langChange = lang => {
        this.setState({ lang }, () => {
            localStorage.setItem("lang", this.state.lang);
            const savedLang = localStorage.getItem("lang");
            i18n.changeLanguage(savedLang);
        });
    };

    render() {
        const { t } = this.props;
        const { lang } = this.state;

        return (
            <header className="header">
        <span>
          <div className="header__name">WebLab</div>
          <div className="header__lang-switcher">
            <button
                onClick={() => this.langChange("ua")}
                className={`header__lng-button ${
                    lang === "ua" ? "header__lng-checked" : ""
                }`}
                value={lang === "ua" ? "active" : ""}
            >
              UA
            </button>
            <button
                onClick={() => this.langChange("cz")}
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
                        <a href="">{t("header__about_us")}</a>
                    </li>
                    <li>
                        <a href="">{t("header__services")}</a>
                    </li>
                    <li>
                        <a href="">{t("header__contact")}</a>
                    </li>
                </ul>
            </header>
        );
    }
}

