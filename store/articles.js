export const state = () => ({
    articles: []
})

export const getters = {
    articles (state) {
        return state.articles
    },
  
    otherArticles: state => id => {
        return state.articles.filter(item => item.id !== +id)
    },
  
    article: state => id => {
        return state.articles.find(item => item.id === +id)
    }
}

export const mutations = {
    setArticles (state, articles) {
        state.articles = articles
    }
}

export const actions = {
    async getArticles ({ commit }) {
        const articles = await this.$service.articles.getArticles()
        commit('setArticles', articles)
      }
}