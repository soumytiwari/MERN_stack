const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello from the server side`);
});

app.get('/about', (req, res) => {
    res.send(`Hello from the about of server side`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello from the contact of server side`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello from the signin section of server side`);
});

app.get('/signout', (req, res) => {
    res.send(`Hello from the signout section of server side`);
});

app.listen(8080, () => {
    console.log(`server listening at port 8080`);
})