const express = require("express")
const dbConnect = require('./../mongodb');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
})

app.post('/', async (req, res) => {
    console.log(req.body)
    data = await dbConnect();
    const result = await data.insert(req.body);
    res.send(result);
})

app.listen(4600);