import ServiceApi from '~/services/serviceApi'

export default ({ $axios, i18n }, inject) => {
    inject('service', new ServiceApi($axios, i18n))
}
