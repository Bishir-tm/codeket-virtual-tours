import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/codeket-virtual-tours/",
  plugins: [react()],
});
