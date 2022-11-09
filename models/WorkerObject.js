class WorkerDesctiption {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.icon = payload.icon || ''
        this.title = payload.title || ''
        this.text = payload.text || ''
    }
}

class WorkerObject {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.name = payload.name || ''
        this.category = payload.category || ''
        this.position = payload.position || ''
        this.experience = payload.experience || ''
        this.img = payload.img || ''
        this.description = payload.description.map(item => new WorkerDesctiption(item)) || []
    }
}

export default WorkerObject