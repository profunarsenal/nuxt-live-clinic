export const state = () => ({
    services: []
})

export const getters = {
    services (state) {
        return state.services
    }
}

export const mutations = {
    setServices (state, services) {
        state.services = services
    }
}

export const actions = {
    async getServices ({ commit }) {
        const services = await this.$service.services.getServices()
        commit('setServices', services)
      }
}