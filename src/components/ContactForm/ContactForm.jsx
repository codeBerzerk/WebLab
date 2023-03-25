import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/contact', { name, email, message })
            .then(response => setStatus(response.data))
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ім'я" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Повідомлення" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit">Відправити</button>
            {status === 'success' && <p>Повідомлення відправлено!</p>}
            {status === 'error' && <p>Помилка відправлення повідомлення. Спробуйте знову.</p>}
        </form>
    );
};

export default ContactForm;
