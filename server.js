const pug = require('pug');
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const socket = require('./socket_config')

// Inicialización de vistas por defecto
app.set('views', __dirname + '/views');

// Seteo de renderizado de vistas con Pug
app.set('view engine', 'pug');

// Ruta por defecto
app.get('/', (req, res) => {
  res.render('home.pug');
});

// Configuración de socket
socket.initSocket(io)

// Inicio del servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});