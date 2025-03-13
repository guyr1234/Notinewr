import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename="clientQU.exe"'
    }
  },
  publicDir: 'public'
})
