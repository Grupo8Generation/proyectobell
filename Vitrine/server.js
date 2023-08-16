const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const MONGO_URI ="mongodb+srv://mseverinoortega:oUYoS2LP3OSTdpIT@cluster0.mdxvb6c.mongodb.net/Todos_productos";

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('An error occurred', err));

const productSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  precio: Number,
  imagenUrl: String,
  categoria: {
    nombre: String, 
    id: Number, 
  },
  descripcion: String,
  materiales: String, 
}, { collection: 'productos' });

const Product = mongoose.model('Producto', productSchema);

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  console.log(products)
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
