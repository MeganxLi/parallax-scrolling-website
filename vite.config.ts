/* eslint-disable import/no-extraneous-dependencies */
import linaria from '@linaria/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), linaria({
    include: ['**/*.{ts,tsx}'],
    babelOptions: {
      presets: ['@babel/preset-typescript', '@babel/preset-react'],
    },
  })],
  base: 'https://MeganxLi.github.io/parallax-scrolling-website/',
})
