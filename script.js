window.addEventListener('scroll', function() {
  const navbar = document.querySelector('#navbar');
  const windowPosition = window.scrollY > 0;
  navbar.classList.toggle('scrolling-active', windowPosition);
})