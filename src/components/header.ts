import type { Meta } from "../types";

import { apElClass, apElCont, apElContClass } from "../functions";

export function createHeader(
  wrapper: HTMLElement,
  meta: Meta,
) {
  const { name, address, dob, email, myurls, phone } = meta;
  const headingEl = apElClass(wrapper, "section", "heading");
  apElContClass(headingEl, "h1", name, "name");
  apElCont(headingEl, "time", dob);

  const infos = apElClass(headingEl, "div", "infos");

  apElCont(infos, "address", address.join("<br>"));

  const formattedEmail = `<a href="mailto:${email}">${email}</a>`;
  const formattedPhone = `<a href="tel:${phone}">${phone}</a>`;
  const formattedContact = [formattedPhone, formattedEmail];

  apElContClass(
    infos,
    "address",
    formattedContact.join("<br>"),
    "contact",
  );

  const formattedUrls = myurls.map((l) => l.url).map((l) =>
    `<a href="${l}">${l}</a>`
  );

  apElContClass(
    infos,
    "address",
    formattedUrls.join("<br>"),
    "link",
  );
}
