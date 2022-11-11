import ArticleModel from '~/models/ArticleModel'

/**
 * Получаем массив статей
 * @property {object} axios
 * @returns {Promise<Array>}
 */

export default class Articles {
    constructor (axios) {
        this.axios = axios
    }

    async getArticles () {
        const { data } = await this.axios.get('/articles.json')
        return data.map(item => new ArticleModel(item))
    }
}