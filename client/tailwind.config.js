/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    "./src/**/*.{js,jsx,ts,tsx}", // Scanne tous les fichiers React pour générer les classes utilisées
  ],
  theme:{
    extend:{
      colors: {
        primary: "#1E3A8A",   // bleu foncé
        secondary: "#9333EA", // violet
        accent: "#F59E0B",    // orange
      },
    }

  },
  plugins:[]
};
