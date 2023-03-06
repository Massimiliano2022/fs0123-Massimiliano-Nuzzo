window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.bg-yellow');
  let navButton = document.getElementById('nav-button');
  let heroSection = document.getElementById('hero');

  if (window.scrollY > heroSection.offsetHeight) {
    navbar.classList.add('navbar-scrolled');
    navButton.classList.add('bg-green');
  } else {
    navbar.classList.remove('navbar-scrolled');
    navButton.classList.remove('bg-green');
  }
});

function animazioneM() {
  let path=document.querySelectorAll('path');
  let numRand=Math.floor(Math.random()*path.length);
  let opacity=Math.round(Math.random()); // genera un numero casuale tra 0 e 1 per l'opacità

  path[numRand].style.opacity=opacity;

  setTimeout(animazioneM, 20);
}
animazioneM();