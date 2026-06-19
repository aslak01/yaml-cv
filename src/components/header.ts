import type { Meta } from "../types";

import { apAnchor, apEl, apElClass, apElCont, apElContClass } from "../functions";

function appendLines(parent: HTMLElement, lines: string[]) {
  lines.forEach((line, i) => {
    if (i > 0) apEl(parent, "br");
    parent.appendChild(document.createTextNode(line));
  });
}

export function createHeader(
  wrapper: HTMLElement,
  meta: Meta,
) {
  const { name, address, dob, email, myurls, phone } = meta;
  const headingEl = apElClass(wrapper, "section", "heading");
  apElContClass(headingEl, "h1", name, "name");
  apElCont(headingEl, "time", dob);

  const infos = apElClass(headingEl, "div", "infos");

  appendLines(apEl(infos, "address"), address);

  const contactEl = apElClass(infos, "address", "contact");
  apAnchor(contactEl, `tel:${phone}`, phone);
  apEl(contactEl, "br");
  apAnchor(contactEl, `mailto:${email}`, email);

  const linkEl = apElClass(infos, "address", "link");
  myurls.forEach((l, i) => {
    if (i > 0) apEl(linkEl, "br");
    apAnchor(linkEl, l.url, l.url);
  });
}
