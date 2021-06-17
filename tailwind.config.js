module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'model-s': "url('/src/images/model-s.jpg')",
        'model-y': "url('/src/images/model-y.jpg')",
        'model-3': "url('/src/images/model-3.jpg')",
        'model-x': "url('/src/images/model-x.jpg')",
        'solar-panel': "url('/src/images/solar-panel.jpg')",
        'accessy': "url('/src/images/accessories.jpg')",
      
      
       })
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
