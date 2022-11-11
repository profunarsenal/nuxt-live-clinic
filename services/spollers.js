import SpollerModel from '~/models/SpollerModel'

export default class Spollers {
    constructor (axios) {
        this.axios = axios
    }

    async getSpollers () {
        const { data } = await this.axios.get('/spollers.json')
        return data.map(item => new SpollerModel(item))
    }
}