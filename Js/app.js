const portfolio = document.querySelector('.portfolio')
const portfolioScroll = portfolio.querySelector('.scroll_bar')
const gallery = portfolio.querySelector('.gallery')
const nav = document.querySelector('nav')
const home = document.querySelector('.home')
const menu = document.querySelector('.menu')
const nav__links = document.querySelector('.nav__links')
//navegating web page ;
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.getAttribute('href')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' })
  }
})
//Portfolio operations
portfolioScroll.addEventListener('click', function (e) {
  const type = e.target.dataset.type
  if (type) {
    ;[...portfolioScroll.children].forEach((el) => {
      el.classList.remove('active')
    })
    e.target.classList.add('active')
    const img = gallery.querySelectorAll('img')
    img.forEach((el) => {
      if (type === 'all') el.style.display = 'block'
      else {
        type === el.dataset.type
          ? (el.style.display = 'block')
          : (el.style.display = 'none')
      }
    })
  }
})

// Toggle navigation links on menu button click
menu.addEventListener('click', function () {
  nav__links.classList.toggle('active')
  if (nav__links.classList.contains('active')) {
    menu.querySelector('p').textContent = '✖' // Change to cross
  } else {
    menu.querySelector('p').textContent = '☰' // Change back to menu
  }
})

// Hide navigation links after clicking one of the list items or links
nav__links.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
    nav__links.classList.remove('active')
    menu.querySelector('p').textContent = '☰' // Change back to menu
  }
})

//sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries
  console.log(!entry.isIntersecting)
  if (entry.isIntersecting) nav.classList.remove('sticky')
  else nav.classList.add('sticky')
}
const navInterset = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
})
navInterset.observe(home)
