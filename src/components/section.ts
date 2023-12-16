import type { Section, SectionData } from "../types";
import { apEl, apElClass, apElCont, apElContClass } from "../functions";

export function createSection(wrapper: HTMLElement, section: Section) {
  const sectionEl = apElClass(wrapper, "div", "section");
  const contentEl = apElClass(sectionEl, "div", "content");
  // const descEl = apElClass(sectionEl, "div", "desc");

  apElContClass(contentEl, "h2", section.heading, "title");
  section.items.map((c) => createSectionContent(sectionEl, c));
}

export function createSectionContent(wrapper: HTMLElement, item: SectionData) {
  const itemEl = apElClass(wrapper, "div", "item");
  const descEl = apElClass(itemEl, "div", "desc");
  const contentEl = apElClass(itemEl, "div", "content");

  const { headline, subheading, description, bullets, city, years } = item;

  headline && apElContClass(contentEl, "h3", headline, "subheading");
  subheading &&
    apElContClass(contentEl, "h4", subheading, "subheading");
  description && apElContClass(contentEl, "p", description, "desc");

  if (bullets && bullets?.length > 0) {
    const bulletsEl = apEl(contentEl, "ul");
    bullets.map((b) => apElCont(bulletsEl, "li", b));
  }

  city && apElContClass(descEl, "div", city, "city");
  years && apElContClass(
    descEl,
    "time",
    years.replace("--", "&ndash;").replace(" ", "&nbsp;"),
    "years",
  );
}
