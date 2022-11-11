import SpollerModel from '~/models/SpollerModel'

/**
 * Получаем массив споллеров
 * @property {object} axios
 * @returns {Promise<Array>}
 */

export default class Spollers {
    constructor (axios) {
        this.axios = axios
    }

    async getSpollers () {
        const { data } = await this.axios.get('/spollers.json')
        return data.map(item => new SpollerModel(item))
    }
}