import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../../styles/reset.css"
import "../../styles/_contactForm.scss"
import Dots from "../images/Sprites/Dots";
import {t} from "i18next";



const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/contact', {   ///IN 'URL' NEED "SERVER URL". EXAMPLE: http://localhost:8080/contact
            name,
            number,
            email,
            message
        })
            .then(response => setStatus(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {}, [t]);

    return (

        <div className="contact-form" id="contactForm">
            <div className="contact-form__dots"><Dots/></div>

            <form className="contact-form__container" onSubmit={handleSubmit}>

                <span style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-evenly"}}>
                <span style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <span style={{display:"flex", flexDirection:"column"}}>
                    <label>{t("contact_name")}</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </span>
                <span style={{display:"flex", flexDirection:"column"}}>
                    <label>{t("contact_tel")}</label>
                    <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
                </span>
                <span style={{display:"flex", flexDirection:"column"}}>
                    <label>{t("contact_email")}</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </span>

                </span>
                <span style={{display: "flex", flexDirection: "column"}}>
                <label>{t("contact_info")} </label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </span>
                </span>
                <button type="submit" className="contact-form__button">Готово!</button>

            </form>
        </div>
    );
};

export default ContactForm;
