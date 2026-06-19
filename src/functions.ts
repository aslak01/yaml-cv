export function apEl(parent: HTMLElement, type: string) {
  return parent.appendChild(document.createElement(type));
}

export function apElClass(parent: HTMLElement, type: string, cl: string) {
  const el = apEl(parent, type);
  el.setAttribute("class", cl);
  return el;
}

export function apElCont(parent: HTMLElement, type: string, content: string) {
  const el = apEl(parent, type);
  el.textContent = content;
  return el;
}

export function apElContClass(
  parent: HTMLElement,
  type: string,
  content: string,
  cl: string,
) {
  const el = apElCont(parent, type, content);
  el.setAttribute("class", cl);
  return el;
}

export function apAnchor(parent: HTMLElement, href: string, text: string) {
  const el = apEl(parent, "a") as HTMLAnchorElement;
  el.setAttribute("href", href);
  el.textContent = text;
  return el;
}
