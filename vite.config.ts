import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    base: '', // Ensure this matches your GitHub repository path
    plugins: [react()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
});
