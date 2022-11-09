export default class Articles {
    constructor (axios) {
        this.axios = axios
    }

    async getArticles () {
        const { data } = await this.axios.get('/articles.json')
        return data
    }
}