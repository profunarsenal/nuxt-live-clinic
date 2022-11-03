export const state = () => ({
    menuBurger: false,
    scrollToSection: false
})

export const getters = {
    isOpenMenuBurger (state) {
        return state.menuBurger
    },

    needScrollToSection (state) {
        return state.scrollToSection
    }
}

export const mutations = {
    closeMenu (state) {
        state.menuBurger = false
    },
  
    toggleMenu (state) {
        state.menuBurger = !state.menuBurger
    },
  
    onScroll (state) {
        state.scrollToSection = true
    },
  
    offScroll (state) {
        state.scrollToSection = false
    }
}