import "./font/font.css";
import "./style.css";
import { createHeader } from "./components/header.ts";
import { createSection } from "./components/section.ts";

import data from "../no_details.yaml";
import { Meta, Section } from "./types.ts";
const { name, address, dob, email, myurls, phone } = data;
const meta = { name, address, dob, email, myurls, phone } as Meta;

const { sections } = data.subsections;

const app = document.querySelector<HTMLDivElement>("#app")!;

createHeader(app, meta);

sections.map((s: Section) => createSection(app, s, "experience"));

type Lang = { language: string; proficiency: string };
const langSect = {
  heading: data["languages-heading"],
  items: data.languages.map((l: Lang) => ({
    headline: l.language,
    subheading: l.proficiency,
  })),
};

createSection(app, langSect, "languages");

type Plang = { language: string };
const plangSect = {
  heading: data["planguages-heading"],
  items: data.planguages.map((l: Plang, i: number) => {
    if (i === 0) {
      return ({
        city: "Rangert etter erfaring med",
        subheading: l.language,
      });
    }

    return ({ subheading: l.language });
  }),
};

createSection(app, plangSect, "planguages");

type Software = { subsec: string; description: string };
const softwareSect = {
  heading: data["software-heading"],
  items: data.software.map((s: Software) => ({
    city: s.subsec,
    subheading: s.description,
  })),
};

createSection(app, softwareSect, "software");
