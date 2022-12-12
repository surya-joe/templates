const header = document.querySelector('header')
window.addEventListener(
    'scroll',
    () => {
        header.classList.toggle('sticky', window.scrollY > 0)
    }
)

// menu-toggle
const menu = document.querySelector('.bx-menu')
const navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}