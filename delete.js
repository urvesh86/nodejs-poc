const mongodbAlias = require('./mongodb');

const deleteData = async () => {
    collection = await mongodbAlias()
    await collection.deleteMany({ name: 'Dhingu' });

    console.log(await collection.find({}).toArray());
}

deleteData();