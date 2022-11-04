export const state = () => ({
    spollers: []
})

export const getters = {
    spollers (state) {
        return state.spollers
    }
}

export const mutations = {
    setSpollers (state, spollers) {
        state.spollers = spollers
    }
}

export const actions = {
    async getSpollers ({ commit }) {
        const spollers = await this.$service.spollers.getSpollers()
        commit('setSpollers', spollers)
      }
}