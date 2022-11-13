/**
 * Класс для создания споллера
 *
 * @property {number} id
 * @property {string} title
 * @property {string} description
 */
export default class SpollerModel {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.title = payload.title || ''
        this.description = payload.description || ''
    }
}