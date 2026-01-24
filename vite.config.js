import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "inject-redirect",
      transformIndexHtml(html) {
        return html.replace(
          "</title>",
          `</title>
    <script>
      if (window.location.hostname.includes('web.app') || window.location.hostname.includes('firebaseapp.com')) {
        window.location.replace('https://www.bizuvegano.com.br' + window.location.pathname + window.location.search);
      }
    </script>`,
        );
      },
    },
  ],
});
