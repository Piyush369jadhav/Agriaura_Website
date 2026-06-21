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
          let found = false;
          for (const name of possibleLogos) {
            if (fs.existsSync(`./${name}`)) {
              try {
                fs.mkdirSync('./public', { recursive: true });
                fs.copyFileSync(`./${name}`, './public/logo.png');
                fs.mkdirSync('./src/assets/images', { recursive: true });
                fs.copyFileSync(`./${name}`, './src/assets/images/logo.png');
                console.log(`Successfully copied ${name} to public and src directories.`);
                found = true;
              } catch (e) {
                console.error('Error copying logo from root:', e);
              }
              break;
            }
          }
          if (!found && fs.existsSync('./src/assets/images/logo.png')) {
            try {
              fs.mkdirSync('./public', { recursive: true });
              fs.copyFileSync('./src/assets/images/logo.png', './public/logo.png');
              if (!fs.existsSync('./logo.png')) {
                fs.copyFileSync('./src/assets/images/logo.png', './logo.png');
              }
              console.log('Successfully synchronized logo from src/assets/images to public and root.');
            } catch (e) {
              console.error('Error synchronizing logo:', e);
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
