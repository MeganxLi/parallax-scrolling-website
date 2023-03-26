/* eslint-disable import/no-extraneous-dependencies */
import linaria from '@linaria/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), linaria()],
  base: 'https://MeganxLi.github.io/parallax-scrolling-website/',
})
