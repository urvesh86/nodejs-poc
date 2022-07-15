const mongodbAlias = require('./mongodb');

const insert = async () => {
    collection = await mongodbAlias()
    collection.insert(
        [
            { "name": "Nita", "Age": 55 },
            { "name": "Anil", "Age": 65 },
            { "name": "Dhingu", "Age": 2.5 }
        ]
    );

    console.log(await collection.find({}).toArray());
}

insert();