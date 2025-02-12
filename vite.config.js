// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   build: {
//     rollupOptions: {
//       external: ['react', 'react-dom'] // Add external dependencies here
//     }
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  resolve: {
    alias: {
      react: "react",
      "react-dom": "react-dom"
    }
  }
});
