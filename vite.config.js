import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    proxy: {
      //  "/api": "http://localhost:5058",
      "/api": "http://10.110.1.73",
    },
  },
  plugins: [react(), svgr()],
});
