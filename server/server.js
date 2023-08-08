const express = require('express');
const app = express();
const port = 3000; // o el puerto que prefieras

// Middleware para manejar el formato de los datos
app.use(express.json());

// Conexión a la base de datos con mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión exitosa a la base de datos');
})
.catch(err => {
  console.error('Error al conectar a la base de datos:', err);
});

// Definir rutas y middleware adicional aquí

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
