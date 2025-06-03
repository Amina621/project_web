/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scanne tous les fichiers React pour générer les classes utilisées
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",   // bleu foncé
        secondary: "#9333EA", // violet
        accent: "#F59E0B",    // orange
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),      // améliore les styles de formulaires
    require('@tailwindcss/typography'), // pour les contenus type articles/blogs
  ],
};
