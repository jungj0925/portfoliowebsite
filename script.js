const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const links = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

links.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

