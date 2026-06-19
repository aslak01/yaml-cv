import ViteYaml from "@modyfi/vite-plugin-yaml";
import { viteSingleFile } from "vite-plugin-singlefile";

export default {
  plugins: [
    ViteYaml(),
    viteSingleFile(),
  ],
  server: {
    port: 8802,
  },
};
