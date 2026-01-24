import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
import netlifyReactRouter from "@netlify/vite-plugin-react-router";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), netlifyReactRouter()],
  resolve: {
    alias: [
      {find: "@", replacement: path.resolve(__dirname, "app")}
    ],
  }
});
