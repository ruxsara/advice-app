import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {BASE} from './src/utility/constants.js'

export default defineConfig({
  base:`/${BASE}/`,  
  plugins: [react()],
})
