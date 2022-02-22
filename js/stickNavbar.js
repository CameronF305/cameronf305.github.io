window.onscroll = function() {stickNavBar()};
          
var navbar = document.getElementById("navbar");
var navbar = document.getElementById("navlogo");
var sticky = navbar.offsetTop;

function stickNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}