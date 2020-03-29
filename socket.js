const server = require('http').createServer()
const io = require('socket.io')(server)

io.origins('*:*')

io.on('connection', function(client) {
  client.on('connect', () => {
    console.log('connected!')
    return 'connected!!!!!'
  })

  let i = 0

  const emitInterval = setInterval(() => {
    client.emit('message', i + ': This is an interval lmao')
    i++
  }, 3000)

  client.on('message', () => 'this is a message')

  client.on('disconnect', function() {
    console.log('client disconnect...', client.id)
    clearInterval(emitInterval)
  })

  client.on('error', function(err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
})

server.listen(3001, function(err) {
  if (err) throw err
  console.log('listening on port 3001')
})
