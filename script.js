const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const links = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

links.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
  	status.classList.add('success');
    status.innerHTML = "Message sent successfully &#x2713;";
    form.reset()
  }).catch(error => {
  	status.classList.add('success');
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
