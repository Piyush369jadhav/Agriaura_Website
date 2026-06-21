import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import fs from 'fs';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'copy-root-logo',
        buildStart() {
          const possibleLogos = ['logo.png', 'Logo.png', 'logo.jpg', 'logo.jpeg', 'Logo.jpg', 'Logo.jpeg'];
          for (const name of possibleLogos) {
            if (fs.existsSync(`./${name}`)) {
              fs.mkdirSync('./src/assets/images', { recursive: true });
              fs.copyFileSync(`./${name}`, './src/assets/images/logo.png');
              console.log(`Successfully copied ${name} from root to assets/images/logo.png`);
              break;
            }
          }
        }
      },
      react(), 
      tailwindcss()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
