const express = require('express')
const path = require("path")
const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')
const productRouter = require('../routes/productRouter')
const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)
const { products, chat } = require('../class/productsClass')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!')
    socket.emit('productos', await products.getAll())
    socket.on('update', async producto => {
        await products.add( producto )
        io.sockets.emit('productos', await products.getAll())
      })
      socket.emit('mensajes', await chat.getAll());
      socket.on('newMsj', async mensaje => {
        mensaje.date = new Date().toLocaleString()
        await chat.add( mensaje )
        io.sockets.emit('mensajes', await chat.getAll());
    })
  
  })

app.set('views', path.resolve(__dirname, '../public'))
app.use('/api', productRouter)
app.use(function(req, res) {
  res.status(404).send({error: -1, descripcion: 'ruta no disponible'})
})

const PORT = 8080
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
