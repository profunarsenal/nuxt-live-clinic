export default class Services {
    constructor (axios) {
        this.axios = axios
    }

    async getData () {
        const { data } = await this.axios.get('/services.json')
        return data
    }
}