const http = require('http');
const data = require('./data');
const fs = require('fs');

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