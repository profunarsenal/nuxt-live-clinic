export const state = () => ({
    workers: [],
    articles: [],
    spollers: [],
    services: []
})

export const getters = {
    workers (state) {
        return state.workers
    },
    
    articles (state) {
        return state.articles
    },

    spollers (state) {
        return state.spollers
    },

    services (state) {
        return state.services
    }
}

export const mutations = {
    setData (state, data) {
        state[data.key] = data.array
    }
}

export const actions = {
    async cacheRequest ({ commit, state }, key) {
        if (!state[key].length) {
            const array = await this.$service[key].getData()
            commit('setData', { array, key })
        }
      }
}