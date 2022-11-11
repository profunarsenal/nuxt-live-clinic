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
        state[data.key] = data.response
    }
}

export const actions = {
    async cacheRequest ({ commit, state }, data) {
        if (!state[data.key].length) {
            const response = await data.request()
            commit('setData', { response, key: data.key })
        }
      }
}