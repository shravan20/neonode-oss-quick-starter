import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['./src/server.ts'],
    format: ['cjs', 'esm'],
    sourcemap: true,
    clean: true,
    dts: true
});