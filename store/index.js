export const state = () => ({
    menuBurger: false
})

export const getters = {
    isOpenMenuBurger (state) {
        return state.menuBurger
    }
}

export const mutations = {
    closeMenu (state) {
        state.menuBurger = false
    },
  
    toggleMenu (state) {
        state.menuBurger = !state.menuBurger
    }
}