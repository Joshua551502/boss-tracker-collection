// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@trackers": path.resolve(__dirname, "src/trackers"),
      "@liesOfPImages": path.resolve(__dirname, "src/assets/images/LiesOfP"),
      "@sekiroImages": path.resolve(__dirname, "src/assets/images/Sekiro"),
      "@eldenRingImages": path.resolve(
        __dirname,
        "src/assets/images/EldenRing"
      ),
      "@darkSoulsIIIImages": path.resolve(
        __dirname,
        "src/assets/images/DarkSoulsIII"
      ),
      

      // Add more aliases as needed
    },
  },
};
