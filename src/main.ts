import "./font/font.css";
import "./style.css";
import { createHeader } from "./components/header.ts";
import { createSection } from "./components/section.ts";

import sampleData from "../data.yaml";
import { CvData, Section } from "./types.ts";

// Use a git-ignored private data file (e.g. no_details.yaml copied from
// latex-cvgen) when present, otherwise fall back to the committed sample so a
// fresh clone still builds and runs. The yaml plugin (see vite.config.js)
// parses the shared latex-cvgen front-matter format at build time.
const overrides = import.meta.glob("../no_details.yaml", {
  eager: true,
  import: "default",
});
const data = (Object.values(overrides)[0] ?? sampleData) as CvData;

const app = document.querySelector<HTMLElement>("#app")!;

createHeader(app, data.details);

// Summary / intro
if (data.intro && data.intro.enabled !== false) {
  createSection(
    app,
    { heading: data.intro.heading, items: [{ description: data.intro.text }] },
    "intro",
  );
}

// Experience and any other primary sections
(data.sections ?? [])
  .filter((s) => s.enabled !== false)
  .forEach((s) => createSection(app, s, "experience"));

// Programming languages
if (data.planguages && data.planguages.enabled !== false) {
  const { heading, subheading, items } = data.planguages;
  const plangSect: Section = {
    heading,
    items: items.map((l, i) =>
      i === 0 && subheading
        ? { city: subheading, subheading: l.language }
        : { subheading: l.language }
    ),
  };
  createSection(app, plangSect, "planguages");
}

// Software / tools
if (data.software && data.software.enabled !== false) {
  const softwareSect: Section = {
    heading: data.software.heading,
    items: data.software.items.map((s) => ({
      city: s.subsec,
      subheading: s.description,
    })),
  };
  createSection(app, softwareSect, "software");
}

// Education and other secondary sections
(data.sections2 ?? [])
  .filter((s) => s.enabled !== false)
  .forEach((s) => createSection(app, s, "experience"));

// Spoken languages
if (data.languages && data.languages.enabled !== false) {
  const langSect: Section = {
    heading: data.languages.heading,
    items: data.languages.items.map((l) => ({
      headline: l.language,
      subheading: l.proficiency,
    })),
  };
  createSection(app, langSect, "languages");
}

// References. Mirrors the template: render the list when enabled, otherwise
// fall back to a short note if one is given.
if (data.references) {
  const { heading, enabled, fallback, items } = data.references;
  if (enabled && items && items.length > 0) {
    const refSect: Section = {
      heading,
      items: items.map((r) => ({
        headline: r.name,
        subheading: [r.position, r.employer].filter(Boolean).join(", "),
        description: [r.tlf, r.email].filter(Boolean).join(" · "),
      })),
    };
    createSection(app, refSect, "references");
  } else if (fallback) {
    createSection(app, { heading, items: [{ description: fallback }] }, "references");
  }
}
