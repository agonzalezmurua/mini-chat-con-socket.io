// Función genérica para transmisión de mensajes
function broadcastMessage(io, message) {
    io.emit('chat message', message)
}

module.exports = {
    initSocket : (io) => {
        io.on('connection', (socket) => {
            broadcastMessage(io, 'new user connected')

            socket.on('disconnect', (algo) => {
                broadcastMessage(io, 'user disconnected')
            })

            socket.on('chat message', (message) => {
                broadcastMessage(io, message)
            })
        });
    }
}