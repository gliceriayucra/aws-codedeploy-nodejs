const http = require('http');
http.createServer((req, res) => {
  res.end('¡Hola! Despliegue en EC2 automatizado con exito.');
}).listen(3000);
