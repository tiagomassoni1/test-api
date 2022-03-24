
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());

app.use(bodyParser.json());

require('./api/routes/customerWallets')(app);

app.use(express.static(path.join(__dirname ,'/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , '/public/index.html'))
});

app.listen(8080, () => {
    console.log(`* Servidor rodando na porta 8080`)
});