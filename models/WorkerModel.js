class WorkerDescription {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.icon = payload.icon || ''
        this.title = payload.title || ''
        this.text = payload.text || ''
    }
}

export default class WorkerModel {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.name = payload.name || ''
        this.category = payload.category || ''
        this.position = payload.position || ''
        this.experience = payload.experience || ''
        this.img = payload.img || ''
        this.description = payload.description?.map(item => new WorkerDescription(item)) || []
    }
}