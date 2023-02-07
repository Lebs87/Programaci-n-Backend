const {mongoose} = require('mongoose');
const connectToDb = require('./config/connectToDb.js');
const read = require('./controler/read.js')
const create = require('./controler/create.js')
const update = require ('./controler/update.js')

connectToDb()
/* -----PARA AGREGAR LOS REGISTROS EN LA BASE DE DATOS ------*/
.then(async ()=> await create())
/* -----PARA LEER LOS REGISTROS EN LA BASE DE DATOS ------*/
//.then(async ()=> await read())
/* -----PARA ACTUALIZAR LOS REGISTROS EN LA BASE DE DATOS ------*/
//.then(async () => await update())

.finally(()=> mongoose.disconnect());
