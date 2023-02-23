import React from 'react';
import "../reset.css"
import "./OurApproach.scss"
import DotsLarge from "../images/DotsLarge";

export default class OurApproach extends React.Component {
    state = {
        lang: "ua"
    };

    render() {
        const {t} = this.props;
        return (
            <div className="our-approach">
                <div className="our-approach__title">{t("our_approach__title")}</div>
                <div className="our-approach__ball-animation"></div>
                <div className="our-approach__step-container">
                    <span>
                    <div className="our-approach__step-container__title">
                        ПРОФЕСІЙНЕ ВИВЧЕННЯ УСІХ ТОНКОСТЕЙ ВАШОГО БІЗНЕСУ.
                    </div>
                    <DotsLarge/>
                    </span>
                    <div className="our-approach__step-container__description">
                        Саме так, ми не просто беремося і робимо що в голову влізе, ми аналізуємо Ваш товар чи послугу, Ваших конкурентів, та Ваших клієнтів, задля того щоб розробити сайт який буде відрізнятися від інших сайтів конкурентів  своєю оригінальністю та практичністю.
                    </div>
                </div>
                <div className="our-approach__step-container">
                    <span>
                    <div className="our-approach__step-container__title">
                        ПРОФЕСІЙНЕ ВИВЧЕННЯ УСІХ ТОНКОСТЕЙ ВАШОГО БІЗНЕСУ.
                    </div>
                    <DotsLarge/>
                    </span>
                    <div className="our-approach__step-container__description">
                        Саме так, ми не просто беремося і робимо що в голову влізе, ми аналізуємо Ваш товар чи послугу, Ваших конкурентів, та Ваших клієнтів, задля того щоб розробити сайт який буде відрізнятися від інших сайтів конкурентів  своєю оригінальністю та практичністю.
                    </div>
                </div>
                <div className="our-approach__step-container">
                    <span>
                    <div className="our-approach__step-container__title">
                        ПРОФЕСІЙНЕ ВИВЧЕННЯ УСІХ ТОНКОСТЕЙ ВАШОГО БІЗНЕСУ.
                    </div>
                    <DotsLarge/>
                    </span>
                    <div className="our-approach__step-container__description">
                        Саме так, ми не просто беремося і робимо що в голову влізе, ми аналізуємо Ваш товар чи послугу, Ваших конкурентів, та Ваших клієнтів, задля того щоб розробити сайт який буде відрізнятися від інших сайтів конкурентів  своєю оригінальністю та практичністю.
                    </div>
                </div>
                <div className="our-approach__step-container">
                    <span>
                    <div className="our-approach__step-container__title">
                        ПРОФЕСІЙНЕ ВИВЧЕННЯ УСІХ ТОНКОСТЕЙ ВАШОГО БІЗНЕСУ.
                    </div>
                    <DotsLarge/>
                    </span>
                    <div className="our-approach__step-container__description">
                        Саме так, ми не просто беремося і робимо що в голову влізе, ми аналізуємо Ваш товар чи послугу, Ваших конкурентів, та Ваших клієнтів, задля того щоб розробити сайт який буде відрізнятися від інших сайтів конкурентів  своєю оригінальністю та практичністю.
                    </div>
                </div>
            </div>
        );

    }
}