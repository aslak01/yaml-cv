// Schema mirrors the latex-cvgen master data files (e.g. aslak/no_details.yaml).
// Keep this in sync with latex-cvgen/src/template.tex: that template is the
// source of truth for which fields exist and how they nest.

export type Meta = {
  name: string;
  dob: string;
  address: string[];
  phone: string;
  email: string;
  myurls: { url: string }[];
};

// Every field is rendered behind a truthy guard in the section component,
// so all of them are optional.
export type SectionData = {
  city?: string;
  country?: string;
  years?: string;
  headline?: string;
  subheading?: string;
  description?: string;
  bullets?: string[];
  detail?: string;
  altdetail?: string;
};

export type Section = {
  heading: string;
  enabled?: boolean;
  items: SectionData[];
};

export type Intro = {
  heading: string;
  enabled?: boolean;
  text: string;
};

export type Plang = { language: string };
export type Planguages = {
  heading: string;
  subheading?: string;
  enabled?: boolean;
  items: Plang[];
};

export type Software = { subsec: string; description: string };
export type SoftwareSection = {
  heading: string;
  enabled?: boolean;
  items: Software[];
};

export type Lang = { language: string; proficiency: string };
export type Languages = {
  heading: string;
  enabled?: boolean;
  items: Lang[];
};

export type Reference = {
  name: string;
  position?: string;
  employer?: string;
  tlf?: string | number;
  email?: string;
};
export type References = {
  heading: string;
  enabled?: boolean;
  fallback?: string;
  items?: Reference[];
};

// Top-level shape of a master data file. The latex-only settings (font,
// geometry, fontsize, ...) are also present in those files but ignored here.
export type CvData = {
  details: Meta;
  intro?: Intro;
  sections?: Section[];
  planguages?: Planguages;
  software?: SoftwareSection;
  sections2?: Section[];
  languages?: Languages;
  references?: References;
};
