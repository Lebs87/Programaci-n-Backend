const  {mongoose} = require('mongoose') 
const { Schema, model } = mongoose;

const productsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    thumbnail: { type: String, required: true },
});

const Products = model('Products', productsSchema);

module.exports = Products