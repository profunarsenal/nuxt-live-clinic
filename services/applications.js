/**
 * Класс для работы с заявками
 * 
 * @property {object} axios
 */
export default class Applications {
    constructor (axios) {
        this.axios = axios
    }

    /**
     * Функция для отправки формы
     * 
     * @param {object} form
     */
    async sendApplication (form) {
        await this.axios.post('/applications.json', form)
    }
}