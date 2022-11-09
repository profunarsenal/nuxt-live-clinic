export default class SpollerObject {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.title = payload.title || ''
        this.description = payload.description || ''
    }
}