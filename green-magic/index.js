import './scss/styles.scss'

const hamburgeer = document.getElementById('hamburger')

hamburger.addEventListener('click', function toggleMainMenu(e) {
  e.preventDefault()
  const mainNav = document.getElementById('main-nav')
  if (mainNav.classList.contains('show')) {
    mainNav.classList.remove('show')
  } else {
    mainNav.classList.add('show')
  }
})
