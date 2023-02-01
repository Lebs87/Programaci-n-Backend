import mongoose from "mongoose";
import connecToDb from "./config/connectToDb.js";
import create from "./controler/create.js";

connecToDb()
.then(async ()=> await create())
.finally(()=> mongoose.disconnect());
