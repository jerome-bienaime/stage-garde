import pages from "../Datas/pages";

export function getPages() {
  return pages;
}

export function pagesToPrint() {
  return pages
    .filter((page) => page.printed != null)
    .filter((page) => page.printed === false);
}

export function getPage(id) {
  return pages.filter((page) => parseInt(page.id) === parseInt(id));
}
