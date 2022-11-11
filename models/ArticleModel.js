/**
 * Класс для создания параграфов статьи
 * @property {string} title
 * @property {string} description
 */

class ArticleParagraph {
    constructor (payload = {}) {
        this.title = payload.title || ''
        this.description = payload.description || ''
    }
}

/**
 * Класс для создания статьи
 * @property {number} id
 * @property {number} time
 * @property {string} author
 * @property {string} tag
 * @property {string} img
 * @property {string} class
 * @property {string} title
 * @property {string} date
 * @property {Array<Object>} paragraphs
 */

export default class ArticleModel {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.time = payload.time || 0
        this.author = payload.author || ''
        this.tag = payload.tag || ''
        this.img = payload.img || ''
        this.class = payload.class || ''
        this.title = payload.title || ''
        this.description = payload.description || ''
        this.date = payload.date || ''
        this.paragraphs = payload.paragraphs?.map(item => new ArticleParagraph(item)) || []
    }
}