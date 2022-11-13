/**
 * Функция для скролла к определенной секции
 *
 * @param {string} elem
 */
export const scrollToSection = elem => {
    setTimeout(() => {
        const section = document.querySelector(`.${elem}`)
        const position = section.getBoundingClientRect().top

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    })
}