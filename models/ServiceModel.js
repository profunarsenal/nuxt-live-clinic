/**
 * Класс для создания услуги
 * @property {number} id
 * @property {string} title
 * @property {string} time
 * @property {number} price
 * @property {string} type
 * @property {number} discount
 */

export default class ServiceModel {
    constructor (payload = {}) {
        this.id = payload.id || 0
        this.title = payload.title || ''
        this.time = payload.time || ''
        this.price = payload.price || 0
        this.type = payload.type || ''
        this.discount = payload.discount || 0
    }
}