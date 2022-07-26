const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/code-stepby-step')
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})


const saveInDB = async () => {

    const productModel = mongoose.model('node-tuts', productSchema);
    let data = await new productModel({ name: `m8-${Date().toString()}`, price: 100 });
    let result = data.save();
    console.log(result);
}
//saveInDB();

const updateInDB = async () => {
    const productModel = mongoose.model('node-tuts', productSchema);
    const result = await productModel.updateMany(
        { price: 110 },
        { $set: { price: 100 } }
    )
    console.log(result);
}
//updateInDB();

const deleteInDB = async () => {
    const productModel = mongoose.model('node-tuts', productSchema);
    const result = await productModel.deleteOne({ price: 100 });
    console.log(result);
}
//deleteInDB();

const findInDB = async () => {
    const productModel = mongoose.model('node-tuts', productSchema);
    const result = await productModel.findOne({ _id: '62df63a866677b00256f31c8' });
    console.log(result)
}
findInDB();