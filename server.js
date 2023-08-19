const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

app.use(bodyParser.json());
app.post('/srvr', (req, res) => {
    const data = req.body; 

    res.json({ message: '......' });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
