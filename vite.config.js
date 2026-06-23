import { viteSingleFile } from "vite-plugin-singlefile";
import YAML from "yaml";

// Parse `.yaml`/`.yml` imports at build time. Unlike a plain YAML.parse, this
// accepts the pandoc front-matter form used by the latex-cvgen master files
// (content wrapped in `---` / `...`) by taking the first non-empty document.
// Parsing at build time also keeps comments and disabled entries out of the
// shipped bundle.
function yamlFrontmatter() {
  return {
    name: "yaml-frontmatter",
    transform(code, id) {
      const [file] = id.split("?");
      if (!file.endsWith(".yaml") && !file.endsWith(".yml")) return;
      const docs = YAML.parseAllDocuments(code);
      const doc = docs.find((d) => d.contents != null) ?? docs[0];
      const json = JSON.stringify(doc ? doc.toJS() : null);
      return { code: `export default ${json};`, map: null };
    },
  };
}

export default {
  plugins: [
    yamlFrontmatter(),
    viteSingleFile(),
  ],
  server: {
    port: 8802,
  },
};
