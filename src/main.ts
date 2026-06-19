import "./font/font.css";
import "./style.css";
import { createHeader } from "./components/header.ts";
import { createSection } from "./components/section.ts";

import sampleData from "../data.yaml";
import { CvData, Meta, Section } from "./types.ts";

// Use a git-ignored private data file (e.g. no_details.yaml) when it is
// present, otherwise fall back to the committed sample so a fresh clone
// still builds and runs.
const overrides = import.meta.glob("../no_details.yaml", {
  eager: true,
  import: "default",
});
const data = (Object.values(overrides)[0] ?? sampleData) as CvData;

const { name, address, dob, email, myurls, phone } = data;
const meta: Meta = { name, address, dob, email, myurls, phone };

const app = document.querySelector<HTMLElement>("#app")!;

createHeader(app, meta);

const { enabled: subsectionsEnabled = true, sections } = data.subsections;
if (subsectionsEnabled) {
  sections
    .filter((s) => s.enabled !== false)
    .forEach((s) => createSection(app, s, "experience"));
}

const langSect: Section = {
  heading: data["languages-heading"],
  items: data.languages.map((l) => ({
    headline: l.language,
    subheading: l.proficiency,
  })),
};

createSection(app, langSect, "languages");

const plangSect: Section = {
  heading: data["planguages-heading"],
  items: data.planguages.map((l, i) =>
    i === 0
      ? { city: "Rangert etter erfaring med", subheading: l.language }
      : { subheading: l.language }
  ),
};

createSection(app, plangSect, "planguages");

const softwareSect: Section = {
  heading: data["software-heading"],
  items: data.software.map((s) => ({
    city: s.subsec,
    subheading: s.description,
  })),
};

createSection(app, softwareSect, "software");
