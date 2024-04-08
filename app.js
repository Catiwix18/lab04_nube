const express = require('express');
const app = express();

//estilos básicos CSS para el servidor
const serverStyles = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: #333;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
`;

// Middleware 
app.use((req, res, next) => {
  res.locals.styles = serverStyles;
  next();
});

// Rutas
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Página Principal</title>
        <style>${res.locals.styles}</style>
      </head>
      <body>
        <div class="container">
          <h1>Bienvenidos a la Página Principal de Katherine</h1>
        </div>
      </body>
    </html>
  `);
});

app.get('/clientes', (req, res) => {
  const clientes = ['Juan Perez', 'Maria Wiston', 'Carlos Fuentes','Juan Perez', 'Maria Wiston', 'Carlos Fuentes'];
  res.send(`
    <html>
      <head>
        <title>Clientes</title>
        <style>${res.locals.styles}</style>
      </head>
      <body>
        <div class="container">
          <h1>Clientes</h1>
          <ul>
            ${clientes.map(cliente => `<li>${cliente}</li>`).join('')}
          </ul>
        </div>
      </body>
    </html>
  `);
});

app.get('/productos', (req, res) => {
  const productos = ['Arroz', 'Azucar', 'Atún','Gaseosas', 'Galletas', 'Condimentos'];
  res.send(`
    <html>
      <head>
        <title>Productos</title>
        <style>${res.locals.styles}</style>
      </head>
      <body>
        <div class="container">
          <h1>Productos</h1>
          <ul>
            ${productos.map(producto => `<li>${producto}</li>`).join('')}
          </ul>
        </div>
      </body>
    </html>
  `);
});

// Puerto
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

