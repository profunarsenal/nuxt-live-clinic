import Workers from '~/services/Workers'
import Articles from '~/services/Articles'
import Spollers from '~/services/Spollers'
import Services from '~/services/Services'
import Applications from '~/services/Applications'

/**
 * Класс для создания плагина $service
 * @property {object} axios
 * @property {string} lang
 * @property {object} workers
 * @property {object} articles
 * @property {object} spollers
 * @property {object} services
 * @property {object} applications
 */

export default class ServiceApi {
    constructor (axios, i18n) {
        this.lang = i18n.locale
        this.axios = axios.create({
            baseURL: process.env.VUE_APP_API_BASE_URL + this.lang
        })

        this.workers = new Workers(this.axios)
        this.articles = new Articles(this.axios)
        this.spollers = new Spollers(this.axios)
        this.services = new Services(this.axios)
        this.applications = new Applications(this.axios)
    }
}