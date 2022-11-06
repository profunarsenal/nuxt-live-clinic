export const state = () => ({
    workers: []
})

export const getters = {
    workers (state) {
        return state.workers
    },
  
    otherWorkers: state => id => {
        return state.workers.filter(item => item.id !== +id)
    },
  
    worker: state => id => {
        return state.workers.find(item => item.id === +id)
    }
}

export const mutations = {
    setWorkers (state, workers) {
        state.workers = workers
    }
}

export const actions = {
    async getWorkers ({ commit }) {
        const workers = await this.$service.workers.getWorkers()
        commit('setWorkers', workers)
      }
}