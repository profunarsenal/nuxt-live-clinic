export const scrollToSection = value => {
    setTimeout(() => {
        const section = document.querySelector(`.${value}`)
        const position = section.getBoundingClientRect().top

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    })
}