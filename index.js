import mongoose from "mongoose";
import connecToDb from "./config/connectToDb.js";
import read from "./controler/read.js";
//import update from "./controler/update.js";
//import create from "./controler/create.js";

connecToDb()
/* -----PARA AGREGAR LOS REGISTROS EN LA BASE DE DATOS ------*/
//.then(async ()=> await create())
/* -----PARA LEER LOS REGISTROS EN LA BASE DE DATOS ------*/
.then(async ()=> await read())
/* -----PARA ACTUALIZAR LOS REGISTROS EN LA BASE DE DATOS ------*/
//.then(async () => await update())

.finally(()=> mongoose.disconnect());
