export default class Workers {
    constructor (axios) {
        this.axios = axios
    }

    async getData () {
        const { data } = await this.axios.get('/workers.json')
        return data
    }
}