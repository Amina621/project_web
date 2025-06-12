import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import './index.css';

dotenv.config();

// Connexion à MongoDB (sans options dépréciées)
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

app.use(express.json()); // Middleware pour parser le JSON dans les requêtes

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Démarrage du serveur (une seule fois)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
}
);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ 
    success: false,
    statusCode,
    message,

})
});