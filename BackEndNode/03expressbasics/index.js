const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
}) 

app.get('/about', (req, res) => {
    res.send('<h1>I am about page</h1>');
});

app.post('/login', (req, res) => {
    res.send("login success");
});

app.delete('/delete', (req, res) => (
    res.send("deleted successfully")
));

// create route for contact us and services

app.listen(3000, () => console.log('Server is running on port 3000...'));