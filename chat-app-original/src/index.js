const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()

const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname , '../public')

app.use(express.static(publicDirectoryPath))

io.on('connect' , (socket) => {
    console.log('User Connected');
    socket.emit('WelcomeMessage' , 'Welcome')
    socket.broadcast.emit('message' , 'A new user has connected.')

    socket.on('sendPing' , (messages) => {
        console.log('message:' + messages)

        io.emit('message' , messages)
    })
})
server.listen(port , () => {
    console.log('port is up on ' + port)
})
