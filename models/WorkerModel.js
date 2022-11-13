/**
 * Класс для создания описания сотрудника
 * 
 * @property {number} id
 * @property {string} icon
 * @property {string} title
 * @property {string} text
 */
class Description {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.icon = payload.icon || ''
        this.title = payload.title || ''
        this.text = payload.text || ''
    }
}

/**
 * Класс для создания сотрудника
 * 
 * @property {number} id
 * @property {string} name
 * @property {string} category
 * @property {string} position
 * @property {string} experience
 * @property {string} img
 * @property {Array<Object>} description
 */
export default class WorkerModel {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.name = payload.name || ''
        this.category = payload.category || ''
        this.position = payload.position || ''
        this.experience = payload.experience || ''
        this.img = payload.img || ''
        this.description = payload.description?.map(item => new Description(item)) || []
    }
}