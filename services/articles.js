import ArticleObject from '~/models/ArticleObject'

export default class Articles {
    constructor (axios) {
        this.axios = axios
    }

    async getArticles () {
        const { data } = await this.axios.get('/articles.json')
        return data.map(item => new ArticleObject(item))
    }
}