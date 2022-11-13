import SpollerModel from '~/models/SpollerModel'

/**
 * Класс для работы со споллерами
 *
 * @property {object} axios
 */
export default class Spollers {
    constructor (axios) {
        this.axios = axios
    }

    /**
     * Получение массива споллеров
     *
     * @returns {Promise<Array>}
     */
    async getSpollers () {
        const { data } = await this.axios.get('/spollers.json')
        return data.map(item => new SpollerModel(item))
    }
}