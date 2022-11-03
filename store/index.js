export const state = () => ({
    menuBurger: false
})

export const getters = {
    isOpenMenuBurger (state) {
        return state.menuBurger
    }
}