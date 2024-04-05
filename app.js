const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

// Ruta para mostrar clientes
app.get('/clientes', (req, res) => {
  const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
  res.json(clientes);
});

// Ruta para mostrar productos
app.get('/productos', (req, res) => {
  const productos = ['Producto 1', 'Producto 2', 'Producto 3'];
  res.json(productos);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
