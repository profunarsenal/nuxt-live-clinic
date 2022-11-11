import WorkerModel from '~/models/WorkerModel'

export default class Workers {
    constructor (axios) {
        this.axios = axios
    }

    async getWorkers () {
        const { data } = await this.axios.get('/workers.json')
        return data.map(item => new WorkerModel(item))
    }
}