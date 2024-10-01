import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.xlsx"],
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000, // Replace 3000 with your desired port number
//     https: {
//       key: fs.readFileSync(path.resolve(__dirname, "key.pem")),
//       cert: fs.readFileSync(path.resolve(__dirname, "cert.pem")),
//     },
//   },
// });
