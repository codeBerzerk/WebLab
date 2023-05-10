const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
require('dotenv').config();


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(morgan('combined'));
app.use(cors());

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

// обробник запиту POST з форми контактів
app.post('/contact', (req, res) => { /////PATH - "SERVER URL!!!!!"
    const { name, number, email, message } = req.body;

    // Відправлення повідомлення в Telegram
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const messageText = `Ім'я: ${name}\n Телефон: ${number}\n Email: ${email}\nПовідомлення: ${message}`;
    bot.sendMessage(chatId, messageText)
        .then(() => {
            console.log('Message sent');
            res.send('success');
        })
        .catch((error) => {
            console.log(error);
            res.send('error');
        });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));
