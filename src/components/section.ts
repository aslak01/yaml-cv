import type { Section, SectionData } from "../types";
import { apEl, apElClass, apElCont, apElContClass } from "../functions";

export function createSection(
  wrapper: HTMLElement,
  section: Section,
  cls: string = "",
) {
  const sectionEl = apElClass(wrapper, "section", `${cls}`);
  const contentEl = apElClass(sectionEl, "div", "content");

  apElContClass(contentEl, "h2", section.heading, "title");
  section.items.map((c) => createSectionContent(sectionEl, c));
}

export function createSectionContent(wrapper: HTMLElement, item: SectionData) {
  const itemEl = apElClass(wrapper, "div", "item");
  const descEl = apElClass(itemEl, "div", "desc");
  const contentEl = apElClass(itemEl, "div", "content");

  const {
    headline,
    subheading,
    description,
    bullets,
    city,
    years,
    detail,
    altdetail,
  } = item;

  headline && apElContClass(contentEl, "h3", headline, "subheading");
  subheading &&
    apElContClass(contentEl, "h4", subheading, "subheading");
  description && apElContClass(contentEl, "p", description, "desc");

  if (bullets && bullets?.length > 0) {
    const bulletsEl = apEl(contentEl, "ul");
    bullets.map((b) => apElCont(bulletsEl, "li", b));
  }

  years && apElContClass(
    descEl,
    "time",
    years.replace("--", "&ndash;").replace(" ", "&nbsp;"),
    "years",
  );
  city && apElContClass(descEl, "div", city, "smdetail");
  detail && apElContClass(descEl, "div", detail, "detail");
  altdetail && apElContClass(descEl, "div", altdetail, "altdetail");
}
