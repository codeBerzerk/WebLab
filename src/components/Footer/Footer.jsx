import React, {Component} from 'react';
import "../../styles/reset.css"
import "../../styles/_footer.scss"
import LineFooter from "../images/Sprites/Line4.png"
import Facebook from "../images/Sprites/Facebook";
import Gmail from "../images/Sprites/Gmail";
import Instagram from "../images/Sprites/Instagram";
import Telegram from "../images/Sprites/Telegram";
import Location from "../images/Sprites/Location";
const Footer = () => {
    return(
        <div className="footer" id="contacts">
            <img className="footer__line" src={LineFooter} alt="line"/>

            <div className="footer__content">
            <div className="footer__content__social-container">
                <Instagram/>
                <Facebook/>
                <Telegram/>
                <Gmail/>
            </div>
                <div className="footer__content__weblab">
                    Designed by Webleb <br/>
                    2023 <br/>
                </div>
                <div className="footer__content__location">
                    Київ, Україна<Location/>
                </div>
            </div>
        </div>
    )
}

export default Footer