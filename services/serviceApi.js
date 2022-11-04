import Workers from './workers'
import Articles from './articles'
import Spollers from './spollers'
import Services from './services'

export default class ServiceApi {
    constructor (axios) {
        this.workers = new Workers(axios)
        this.articles = new Articles(axios)
        this.spollers = new Spollers(axios)
        this.services = new Services(axios)
    }
}