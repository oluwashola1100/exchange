var navbar = document.querySelector('nav');
window.onscroll = function() {

  if (window.pageYOffset > 0) {
    navbar.classList.add('navbar-white');
  } else {
    navbar.classList.remove('navbar-white');
  }
}
function myFunction() {
  var x = document.querySelector(".mobile");
    x.style.display = "none";
    x.style.transition="all 3s ease-out" ;

} 