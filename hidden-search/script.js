const search = document.querySelector('.search');
const btn = document.querySelector('.btn')
const input = document.querySelector('.input_search')

btn.addEventListener('click', () => {
  search.classList.toggle('open');
  input.focus()
})