class ArticleParagraph {
    constructor (payload = {}) {
        this.title = payload.title || ''
        this.description = payload.description || ''
    }
}

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