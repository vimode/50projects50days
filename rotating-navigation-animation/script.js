const openNav = document.querySelector('.nav_open')
const closeNav = document.querySelector('.nav_close')

const wrapper = document.querySelector('.wrapper')

const nav = document.querySelector('nav')

openNav.addEventListener('click', () => {
  wrapper.classList.add('rotate');
  nav.classList.add('rotate');
})

closeNav.addEventListener('click', () => {
  wrapper.classList.remove('rotate');
  nav.classList.remove('rotate');
})