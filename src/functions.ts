export function apEl(parent: HTMLElement, type: string) {
  return parent.appendChild(document.createElement(type));
}

export function apElClass(parent: HTMLElement, type: string, cl: string) {
  const el = apEl(parent, type);
  el.setAttribute("class", cl);
  return el;
}

export function apElCont(parent: HTMLElement, type: string, content: string) {
  return apEl(parent, type).innerHTML = content;
}

export function apElContClass(
  parent: HTMLElement,
  type: string,
  content: string,
  cl: string,
) {
  const el = apEl(parent, type);
  el.innerHTML = content;
  el.setAttribute("class", cl);
  return el;
}
