const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const PORT = process.env.PORT || 3000;

// Crear servidor de livereload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);

// Middleware de livereload
app.use(connectLivereload());

// Servir archivos estáticos del directorio actual
app.use(express.static(__dirname));

// Cualquier otra ruta sirve el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`❤️ Servidor de aniversario corriendo en http://localhost:${PORT}`);
});
