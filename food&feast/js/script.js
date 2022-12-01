// sticky navbar 
const navbar = document.querySelector('.navbar')
window.addEventListener(
    'scroll',
    () => {
        navbar.classList.toggle('sticky', window.scrollY > 0)
    }
)

// menu-toggle
const menu = document.querySelector('.menu-icon')
const navlist = document.querySelector('.nav-items')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}