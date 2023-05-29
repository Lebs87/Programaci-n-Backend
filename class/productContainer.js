const connectToDd = require('../DB/config/connectToMongo')
const { productModel } = require('../DB/model/mongoDbModel')
const { logger, loggererr } = require('../log/logger')

class Container {
  constructor(schema) {
    this.schema = schema
  }

  async getAll() {
    try {
      await connectToDd()
      const documentsInDb = await this.schema.find()
      return documentsInDb
    } catch (err) {
      loggererr.error(`Error: ${err} cuando se recuperan los productos de la DB`)
    }
  }

  async getById(id) {
    try {
      await connectToDd()
      const documentInDb = await this.schema.find({ _id: id })
      return documentInDb ? documentInDb : null
    } catch (err) {
      loggererr.error(`Error: ${err} recuperando el producto id:${is} de la DB`)
    }
  }

  async deleteById(id) {
    try {
      await connectToDd()
      await this.schema.deleteOne({ _id: id })
      return
    } catch (err) {
      loggererr.error(`Error: ${err} al tratar de borrar el producto id:${id} de la DB`)
      return false
    }
  }

  async deleteAll() {
    try {
      await connectToDd()
      await this.schema.deleteMany()
      return
    } catch (err) {
      loggererr.error(`Error: ${err} cuando tratamos de borrar todos los productos de la DB`)
      return false
    }
  }

  async add(item) {
    try {
      await connectToDd()
      const newProduct = new productModel(item)
      await newProduct.save()
        .then(product => logger.info(`Agregado a la DB el producto con id: ${product._id}`))
        .catch(err => loggererr.error(`Error: ${err} al guardar el producto id: ${product._id} en la DB`))
      return
    } catch (err) {
      loggererr.error(`Error: ${err} al guardar el producto id: ${product._id} en la DB`)
    }
  }
}

const products = new Container(productModel)

module.exports = { products }
