const onConnection = client => {
  console.log('client connected!')

  client.on('connect', () => {
    console.log('connected!')
    return 'connected!!!!!'
  })

  client.on('message', data => {
    console.log('Recieved message:', data)
    client.broadcast.emit('message', data)
  })

  client.on('disconnect', function() {
    console.log('client disconnect...', client.id)
  })

  client.on('error', function(err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
}

module.exports = {
  onConnection,
}
