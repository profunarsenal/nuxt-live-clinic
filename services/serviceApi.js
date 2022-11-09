import Workers from './Workers'
import Articles from './Articles'
import Spollers from './Spollers'
import Services from './Services'
import Applications from './Applications'

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