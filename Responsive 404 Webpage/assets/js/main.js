/*=============== SHOW MENU ===============*/
const navToggler = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
const navCloseBtn = document.getElementById('nav-close')

if (navToggler) { // navToggle ခလုတ် ရှိနေရင် အလုပ်လုပ်
    navToggler.addEventListener('click', () => navMenu.classList.add('show-menu'))
}
if (navCloseBtn) { // navClose ခလုတ် ရှိနေရင် အလုပ်လုပ်
    navCloseBtn.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

/*=============== REMOVE MENU MOBILE ===============*/
// Navigation Menu ထဲက Link တစ်ခုခုကို နှိပ်လိုက်ရင် Menu Bar ကို ပြန်ဖျောက်ပေးဖို့
const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach(navLink => {
    navLink.addEventListener('click', removeMenu)
})

function removeMenu() {
    navMenu.classList.remove('show-menu')
}
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.home__data`, { origin: 'top', delay: 400 })
sr.reveal(`.home__img`, { origin: 'bottom', delay: 600 })
sr.reveal(`.home__footer`, { origin: 'bottom', delay: 600 })