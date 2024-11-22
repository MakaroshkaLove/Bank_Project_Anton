const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const usersFile = path.join(__dirname, 'users.json');

app.get('/users', (req, res) => {
    fs.readFile(usersFile, (err, data) => {
        if (err) return res.status(500).send('Помилка читання даних');
        const users = JSON.parse(data);
        res.json(users);
    });
});


app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("Усі поля обов'язкові для заповнення");
    }

    fs.readFile(usersFile, (err, data) => {
        if (err) return res.status(500).send('Помилка читання даних');

        const users = JSON.parse(data);

        if (users.some(user => user.username === username || user.email === email)) {
            return res.status(400).send("Користувач із таким ім'ям або email вже існує");
        }

        users.push({ username, email, password }); 
        fs.writeFile(usersFile, JSON.stringify(users, null, 2), err => {
            if (err) return res.status(500).send('Помилка збереження даних');
            res.status(201).send('Користувач успішно зареєстрований');
        });
    });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(usersFile, (err, data) => {
        if (err) return res.status(500).send('Помилка читання даних');

        const users = JSON.parse(data);
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            res.status(200).send('Авторизація успішна');
        } else {
            res.status(401).send("Неправильне ім'я користувача або пароль");
        }
    });
});

app.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'));
