var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTop");
var rootElement = document.documentElement;

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showScroll");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showScroll");
    }
  });
}

let observer = new IntersectionObserver(callback);
observer.observe(target);
