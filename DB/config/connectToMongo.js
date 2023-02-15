const mongoose = require('mongoose')
let isConected

const connectToDd = async () => {
  if(!isConected) {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb+srv://Coderhouse:ZsUGwvYbattJcbhg@cluster1de2daentregapro.7wjuhnc.mongodb.net/test',
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          isConected = true
          console.log('MongoDB Connected...')})
        .catch(err => console.log(err))   
    return
  }

  console.log("Conexion existente")
  return
}

module.exports = connectToDd 
