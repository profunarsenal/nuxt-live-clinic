import Workers from './workers'
import Articles from './articles'
import Spollers from './spollers'
import Services from './services'
import Applications from './applications'

export default class ServiceApi {
    constructor (axios, i18n) {
        this.lang = i18n.locale
        this.axios = axios.create({
            baseURL: `https://liveclinic63-default-rtdb.firebaseio.com/${this.lang}`
        })

        this.workers = new Workers(this.axios)
        this.articles = new Articles(this.axios)
        this.spollers = new Spollers(this.axios)
        this.services = new Services(this.axios)
        this.applications = new Applications(this.axios)
    }
}