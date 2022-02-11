// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.pageYOffset;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}