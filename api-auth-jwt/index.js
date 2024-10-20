// index.js
const express = require('express');
const sequelize = require('./config/database');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());

// Importar rutas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Sincronizar base de datos y arrancar el servidor
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });