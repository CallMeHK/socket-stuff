var express = require('express')
const app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const {onConnection} = require('./socket')

server.listen(3000)

app.use('/', express.static('public'))

io.on('connection', onConnection)

console.log('server started on port 3000')
