// ATTRIBUTION
const arrow = document.querySelector('.attr__btn')
const panel = document.querySelector('.attribution')

arrow.addEventListener('click', function () {
    panel.classList.toggle('show')

    if (panel.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'true')
        this.removeAttribute('title')
        this.style.animation = 'none'
    } else {
        this.setAttribute('aria-expanded', 'false')
    }
})

// Click outside
document.addEventListener('click', function (e) {
    if (!arrow.contains(e.target)) {
        if (panel.classList.contains('show')) {
            panel.classList.remove('show')
            arrow.setAttribute('aria-expanded', 'false')
            arrow.setAttribute('title', 'Show attribution information')
        }
    }
})

/* THEME SWITCHER */
const btnTheme = document.querySelector('.header__theme')
const iconsTheme = document.querySelectorAll('.theme-icon')
const root = document.querySelector(':root')

btnTheme.addEventListener('click', function () {
    root.classList.toggle('dark')

    for (let i of iconsTheme) {
        if (i.classList.contains('hidden')) {
            i.classList.remove('hidden')
        } else {
            i.classList.add('hidden')
        }
    }
})