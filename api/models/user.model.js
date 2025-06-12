import mongoose from 'mongoose'; // ✅ Corrigé ici

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema); // ✅ Corrigé ici aussi
export default User;
