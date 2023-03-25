/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* MENU SHOW */
/*validate if the constant exist*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* Menu Hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.navlink')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEeventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24, 

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true,
  });

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }else{
        sectionsClass.classList.remove('active-link')
    }

    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously chose a topic

if (selectedTheme) {
    // if the validation is fulfilled ,we ask what the issue was to know if we activated or deactivated the dark-theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate /deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
this.scrollY >= 50 ? header.classList.add('bg-header')
                   : header.classList.remove('bg-header')

}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
})



sr.reveal(`.home__data, .footer__container`)
sr.reveal(`.section__title, .section__subtitle`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom',interval: 100})
sr.reveal(`.skills__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.skills__content:nth-child(3)`, {origin: 'right'})
sr.reveal(`.qualification__content, .certifications__card`, {origin: 'right'})