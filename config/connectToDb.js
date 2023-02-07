//import mongoose from "mongoose";
const {mongoose} = require('mongoose');

let isConnected;

const connecToDb = async () => {
    if (!isConnected) {
        console.log('Nueva conexión');
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce2')
        isConnected = true;
        return;
    }
    console.log('Conexión existente');
    return;
}
//export default connecToDb
module.exports = connecToDb