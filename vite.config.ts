import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
import path from 'path'
export default defineConfig({
  resolve:{
    alias:{
      '@assets':path.resolve(__dirname,'./src/assets/'),
      '@components':path.resolve(__dirname,'./src/components/'),
      '@hooks':path.resolve(__dirname,'./src/hooks/'),
      '@pages':path.resolve(__dirname,'./src/pages/'),
      '@utils':path.resolve(__dirname,'./src/utils/index'),
      '@services':path.resolve(__dirname,'./src/services/'),
      '@shared':path.resolve(__dirname,'./src/shared/'),
      '@routes':path.resolve(__dirname,'./src/routes/'),
      '@store':path.resolve(__dirname,'./src/store/'),
      '@templates':path.resolve(__dirname,'./src/templates/index'),
      '@types':path.resolve(__dirname,'./src/types/index'),
    }
  },
  plugins: [react(),svgr()],
})
