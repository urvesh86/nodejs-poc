const mongodbAlias = require('./mongodb');
const http = require('http');
const express = require('express');
const data = require('./data');
const fs = require('fs');
const path = require('path');
const reqFilter = require('./middleware');
const { traceDeprecation } = require('process');


//Get details in process object
console.log(process.argv);

//Write to file
const processArg = process.argv;
if (processArg[2] == 'add') {
    fs.writeFileSync(process.argv[3], 'test file');
}
else if (processArg[2] == 'remove') {
    fs.unlinkSync(process.argv[3]);
}
else {
    console.warn('invalid input!');
}

http.createServer((req, res) => {

    res.write('code step by step');
    res.end();

}).listen(4500);

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ data: data }));
    res.end();

}).listen(4501);


//Express JS
const dbConnection = mongodbAlias();
const app = express();
const route = express.Router();
//app.use(reqFilter);
route.use(reqFilter);

const filePath = path.join(__dirname, 'public')

app.use(express.static(filePath));

route.get('', (req, res) => {
    console.log(req.query);


    res.send('This is home page');
})


app.get('/about', async (req, res) => {

    const collection = await mongodbAlias();
    let arrColl = await collection.find({}).toArray();
    res.send(JSON.stringify(arrColl));
})

app.get('/help', (req, res) => {
    res.send('This is help page');
})

app.use('/', route);

app.listen('4502');


