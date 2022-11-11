import ServiceModel from '~/models/ServiceModel'

export default class Services {
    constructor (axios) {
        this.axios = axios
    }

    async getServices () {
        const { data } = await this.axios.get('/services.json')
        return data.map(item => new ServiceModel(item))
    }
}