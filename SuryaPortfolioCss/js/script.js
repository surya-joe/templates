// sticky navbar 
const header = document.querySelector('header')
window.addEventListener(
    'scroll',
    () => {
        header.classList.toggle('sticky', window.scrollY > 0)
    }
)

// menu-toggle
const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}

// scroll delay animation
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('service, .about, .portfolio, .service, .cta, .contact',{delay:200, origin:'bottom'})

