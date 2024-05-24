window.onscroll = function() {stickNavBar()};
          
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavBar() {
  if (window.scrollY >= sticky) {
    document.getElementById("navlogo").style.opacity = "100";
  } else {
    document.getElementById("navlogo").style.opacity = "0";
  }
}