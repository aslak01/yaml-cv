export type Meta = {
  name: string;
  address: string[];
  dob: string;
  email: string;
  myurls: { url: string }[];
  phone: string;
};

export type Section = {
  heading: string;
  enabled?: boolean;
  items: SectionData[];
};

// Every field is rendered behind a truthy guard in the section component,
// so all of them are optional.
export type SectionData = {
  city?: string;
  years?: string;
  headline?: string;
  subheading?: string;
  description?: string;
  bullets?: string[];
  detail?: string;
  altdetail?: string;
};

export type Lang = { language: string; proficiency: string };
export type Plang = { language: string };
export type Software = { subsec: string; description: string };

export type CvData = Meta & {
  subsections: { enabled?: boolean; sections: Section[] };
  languages: Lang[];
  "languages-heading": string;
  planguages: Plang[];
  "planguages-heading": string;
  software: Software[];
  "software-heading": string;
};
