import ArticleModel from '~/models/ArticleModel'

/**
 * Класс для работы со статьями
 *
 * @property {object} axios
 */
export default class Articles {
    constructor (axios) {
        this.axios = axios
    }

    /**
     * Получение массива статей
     *
     * @returns {Promise<Array>}
     */
    async getArticles () {
        const { data } = await this.axios.get('/articles.json')
        return data.map(item => new ArticleModel(item))
    }
}