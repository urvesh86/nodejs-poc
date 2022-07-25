const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/code-stepby-step')
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number
    })
    const productModel = mongoose.model('node-tuts', productSchema);
    let data = await new productModel({ name: 'm8', price: 100 });
    let result = data.save();
    console.log(result);
}

main();