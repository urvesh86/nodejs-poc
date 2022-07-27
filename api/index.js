const express = require('express')
require('./config')
const product = require('./product')

const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = req.body;
    data = new product(req.body);
    let result = await data.save();

    res.send(result)
})

app.listen('5000')