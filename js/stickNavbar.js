window.onscroll = function() {stickNavBar()};
          
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    document.getElementById("navlogo").style.opacity = "100";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("navlogo").style.opacity = "0";
  }
}