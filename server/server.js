const express = require('express');

const app = express();
const PORT = 3000; // o el puerto que prefieras

// Middleware para manejar el formato de los datos
app.use(express.json());
(async () => {
const fetch = await import('node-fetch')

})();
// Conexión a la base de datos con mongoose
app.get('/products', async (req,res) => {
try{
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  res.json(data);

} catch (error){
  console.log('Error fetching data',error);
  res.status(500).json({error: 'Internal server error'});
}


});

app.listen(PORT, () => {
  console.log('Proxy server is running on port ${PORT}');
})
