const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function dbConnect() {
    let result = await client.connect();
    const dbConnection = result.db('code-stepby-step')
    let collection = dbConnection.collection('node-tut');   
    return collection
}

module.exports = dbConnect;