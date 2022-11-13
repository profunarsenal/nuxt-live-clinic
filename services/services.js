import ServiceModel from '~/models/ServiceModel'

/**
 * Класс для работы с услугами
 * 
 * @property {object} axios
 */
export default class Services {
    constructor (axios) {
        this.axios = axios
    }

    /**
     * Получение массива услуг
     * 
     * @returns {Promise<Array>}
     */
    async getServices () {
        const { data } = await this.axios.get('/services.json')
        return data.map(item => new ServiceModel(item))
    }
}