export default class Applications {
    constructor (axios) {
        this.axios = axios
    }

    async sendApplication (form) {
        await this.axios.post('/applications.json', form)
    }
}