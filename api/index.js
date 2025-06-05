import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connexion à MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

// Middleware JSON (optionnel mais courant)
app.use(express.json());

// Démarrage du serveur
app.listen(3000, () => {
  console.log('API server is running on http://localhost:3000');
});
