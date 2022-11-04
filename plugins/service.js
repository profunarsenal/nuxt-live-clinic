import ServiceApi from '~/services/serviceApi'

export default ({ $axios }, inject) => {
    inject('service', new ServiceApi($axios))
}
