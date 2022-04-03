import pages from "../Datas/pages"

export function getPages() {
    return pages
}

export function getPage(id) {
    return pages.filter(page => parseInt(page.id) === parseInt(id))
}