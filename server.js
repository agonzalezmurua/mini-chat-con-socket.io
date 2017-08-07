const jade = require('jade');
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const socket = require('./socket_config')

// Inicialización de vistas por defecto
app.set('views', __dirname + '/views');

// Seteo de renderizado de vistas con Jade
app.set('view engine', 'jade');

// Ruta por defecto
app.get('/', (req, res) => {
  res.render('home.jade');
});

// Configuración de socket
socket.initSocket(io)

// Inicio del servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});