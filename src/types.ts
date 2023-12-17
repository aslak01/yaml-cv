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
  items: SectionData[];
};
export type SectionData = {
  city: string;
  years: string;
  headline: string;
  subheading: string;
  description: string;
  bullets?: string[];
  detail?: string;
  altdetail?: string;
};
