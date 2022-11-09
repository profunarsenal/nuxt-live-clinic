class ArticleParagraph {
    constructor (payload = {}) {
        this.title = payload.title || ''
        this.description = payload.description || ''
    }
}

class ArticleObject {
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
        this.articles = payload.articles.map(item => new ArticleParagraph(item)) || []
    }
}

export default ArticleObject