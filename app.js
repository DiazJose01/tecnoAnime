const express = require('express');
const app = express();
let path = require('path');
const puerto = 3030;

app.use(express.static("public"))

/* Rutas */
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
});
app.get('/carritoDeCompra', function (req, res){
    res.sendFile(path.join(__dirname, "/views/carritoDeCompra.html"))
});
app.get('/fomularioRegister', function (req, res){
    res.sendFile(path.join(__dirname, "/views/fomularioRegister.html"))
});
app.get('/formularioLogin', function (req, res){
    res.sendFile(path.join(__dirname, "/views/formularioLogin.html"))
});
app.get('/detalleDeProducto', function (req, res){
    res.sendFile(path.join(__dirname, "/views/detalleDeProducto.html"))
});
app.get('/vistaDeUsuario', function (req, res){
    res.sendFile(path.join(__dirname, "/views/vistaDeUsuario.html"))
});

/* Servidor */
app.listen(puerto, () => console.log(`Servidor levantado en el puerto http://localhost:${puerto}`));