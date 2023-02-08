const useMongoDb = require('../permissions/dataBaseUse')
const connectToDd = require('../DB/config/connectToFirebase.js')

let products
let carts 

if (useMongoDb.useMongoDb) {
  products = require('./products/ProductsDaoMongoDb')
  carts = require('./carts/CartsDaoMongoDb')
} else {
 products = require('./products/ProductsDaoFirebase')
 carts = require('./carts/CartsDaoFirebase')
 connectToDd()

}

module.exports = { products, carts }
