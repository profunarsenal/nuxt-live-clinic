import WorkerModel from '~/models/WorkerModel'

/**
 * Класс для работы с сотрудниками
 * 
 * @property {object} axios
 */
export default class Workers {
    constructor (axios) {
        this.axios = axios
    }

    /**
     * Получение массива сотрудников
     * 
     * @returns {Promise<Array>}
     */
    async getWorkers () {
        const { data } = await this.axios.get('/workers.json')
        return data.map(item => new WorkerModel(item))
    }
}