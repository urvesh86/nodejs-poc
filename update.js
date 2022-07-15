const mongodbAlias = require('./mongodb');

const update = async () => {
    collection = await mongodbAlias()
    await collection.updateOne(
        { name: 'Nita Purohit' },
        {
            $set: { name: 'Nita' }
        });

    console.log(await collection.find({}).toArray());
}

update();