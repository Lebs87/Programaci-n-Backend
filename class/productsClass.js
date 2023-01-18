const knex = require('knex')

class Container {
  constructor(config, dbTable) {
    this.knex = knex(config)
    this.dbTable = dbTable
  }

  async getAll() {
    try {
      const itemsInDb = await this.knex.from(this.dbTable).select('*')
      return itemsInDb
    } catch (err) {
      throw new Error(`Error getting all items: ${err}`)
    }
  }

  async add(item) {
    try {
      await this.knex(this.dbTable).insert(item)
    } catch (err) {
      throw new Error(`Error adding item: ${err}`)
    }
  }

  async modifyById(id, item) {
    try {
      const count = await this.knex(this.dbTable).where('id', id).count()
      if (count[0]['count(*)'] > 0) {
        await this.knex(this.dbTable).where('id', id).update(item)
        return true
      } else {
        return false
      }
    } catch (err) {
      throw new Error(`Error modifying item by id: ${err}`)
    }
  }

  async getById(id) {
    try {
      if (!id) throw new Error("Id is required");
      const product = await this.knex.select('title', 'price', 'thumbnail')
        .from(this.dbTable).where('id', id).first()
      return product ? product : null
    } catch (err) {
      throw new Error(`Error getting item by id: ${err}`)
    }
  }

  async deleteById(id) {
    try {
        if (!id) throw new Error("Id is required");
        const count = await this.knex(this.dbTable).where('id', id).count()
        if (count[0]['count(*)'] > 0) {
            await this.knex(this.dbTable).where('id', id).del()
            return true
        } else {
            return false
        }
    } catch (err) {
        throw new Error(`Error deleting item by id: ${err}`)
    }
}

async deleteAll() {
    try {
      await this.knex(this.dbTable).del()
    } catch (err) {
      throw new Error(`Error deleting all items: ${err}`)
    }
  }
}

const chat = new Container(
  {
    client: 'sqlite3',
    connection: { filename: './db/sqlite3db/ecommerce.sqlite' },
    useNullAsDefault: true
  },
  'chat'
)

const products = new Container(
  {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'ecommerce'
    }
  },
  'products'
)

module.exports = { chat, products }
