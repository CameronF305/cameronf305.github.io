//Mobile Navagation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".btn").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//Back to top
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

//Load Sections Sequence
document.addEventListener("DOMContentLoaded", () => {
    loadin('.loadseq section', { delay: 100 })
  });

///Fade In function
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).loadin = e()
}(this, function() {
    "use strict";
    var n = function() {
        return (n = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    }
      , o = function() {
        function t(t) {
            this.stack = t.items,
            this.userFunction = t.func,
            this.delay = t.delay
        }
        return t.prototype.pause = function() {
            clearInterval(this._interval)
        }
        ,
        t.prototype.start = function() {
            this.isDone() || (this._interval = window.setInterval(this.fire.bind(this), this.delay))
        }
        ,
        t.prototype.reset = function() {
            this.stack = [],
            this.pause()
        }
        ,
        t.prototype.fire = function() {
            this.check(),
            this.userFunction(this.stack.shift()),
            this.check()
        }
        ,
        t.prototype.check = function() {
            if (!this.stack.length)
                return clearInterval(this._interval)
        }
        ,
        t.prototype.isDone = function() {
            return this.stack.length <= 0
        }
        ,
        t
    }()
      , i = function() {
        function t(t) {
            this.query = t,
            this.toAnimate = Array.from(document.querySelectorAll(t))
        }
        return t.prototype.animateItems = function(t, e) {
            var n = this
              , i = this.getItemsToAnimate();
            i && new o({
                items: i,
                delay: t,
                func: function(t) {
                    return e ? e(t) : n.assignDelayAndOpacity(t)
                }
            }).start()
        }
        ,
        t.prototype.getItemsToAnimate = function() {
            if (!this.isDone()) {
                var t = this.getVisibleAndHiddenItems()
                  , e = t.visible
                  , n = t.hidden;
                return this.toAnimate = n,
                e
            }
        }
        ,
        t.prototype.reset = function() {
            this.toAnimate = Array.from(document.querySelectorAll(this.query)),
            this.getVisibleAndHiddenItems().hidden.forEach(function(t) {
                return t.style.opacity = "0",
                t
            })
        }
        ,
        t.prototype.isDone = function() {
            return this.toAnimate.length <= 0
        }
        ,
        t.prototype.assignDelayAndOpacity = function(t) {
            if (t) {
                var e = this.getDelay(t);
                Object.assign(t.style, {
                    opacity: 1
                }),
                e && Object.assign(t.style, {
                    transitionDelay: e
                })
            }
        }
        ,
        t.prototype.getVisibleAndHiddenItems = function() {
            var i = this;
            return this.toAnimate.reduce(function(t, e) {
                var n = i.shouldBeVisible(e) ? "visible" : "hidden";
                return t[n] = t[n].concat(e),
                t
            }, {
                visible: [],
                hidden: []
            })
        }
        ,
        t.prototype.getDelay = function(t) {
            if (t && t.dataset && t.dataset.delay)
                return t.dataset.delay
        }
        ,
        t.prototype.shouldBeVisible = function(t) {
            var e = t.getBoundingClientRect()
              , n = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(e.bottom < 0 || 0 <= e.top - n) && "1" !== t.style.opacity
        }
        ,
        t
    }()
      , r = {
        delay: 200,
        selector: ".loadin",
        noInitalScrollEvent: !1,
        animationFunction: void 0
    }
      , s = function() {
        function t(t) {
            void 0 === t && (t = r);
            var e = this
              , n = Object.assign({}, r, t);
            this.animationService = new i(n.selector),
            this._detach = this.setUpEventListener("scroll", function() {
                e.animationService.animateItems(n.delay, n.animationFunction)
            }),
            n.noInitalScrollEvent || this.sendScroll()
        }
        return t.prototype.isDone = function() {
            return this.animationService.isDone()
        }
        ,
        t.prototype.detach = function() {
            return this._detach()
        }
        ,
        t.prototype.reset = function() {
            this.animationService.reset(),
            this.sendScroll()
        }
        ,
        t.prototype.sendScroll = function() {
            window.dispatchEvent(new Event("scroll"))
        }
        ,
        t.prototype.setUpEventListener = function(t, e) {
            var n = this
              , i = function() {
                n.isDone() && window.removeEventListener(t, i, !0),
                e()
            };
            return window.addEventListener(t, i.bind(this)),
            function() {
                return window.removeEventListener(t, i, !0)
            }
        }
        ,
        t
    }();
    return function(t, e) {
        return new s(n({
            selector: t
        }, e))
    }
});

//Google Analytics <script> content
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-85DVHEQW72'); 



// Light & Dark Mode

const htmlDoc = document;
const button = htmlDoc.querySelector('.toogleBtn');
const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

let lightModeState = false;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

// MediaQueryList object
const useLight = window.matchMedia("(prefers-color-scheme: light)");

// Toggles the "light-mode" class
function toggleLightMode(state) {
//    document.documentElement.classList.toggle("light-mode", state);
    htmlEl.dataset.theme = light;
    lightModeState = state;  
}

// For local Storage
function setLightModeLocalStorage(state) {
    localStorage.setItem('light', state)
}

// Initial Settings
toggleLightMode(useLight.matches);
//toggleLightMode(localStorage.getItem("light-mode") == "true");
toggleLightMode(currentTheme = 'light');

// Listen for changes in the OS settings.
useLight.addListener((evt) => toggleLightMode(evt.matches));

// Toggles the "light" theme on click and sets localStorage state
button.addEventListener("click",() => {
    lightModeState = !lightModeState;

  toggleLightMode(lightModeState);
  setLightModeLocalStorage(lightModeState);
});




//const htmlEl = document.getElementsByTagName('html')[0];
//const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
//var lightButton = document.getElementById("lightToggle");
//var darkButton = document.getElementById("darkToggle");

//if (currentTheme) {
//    htmlEl.dataset.theme = currentTheme;
//}

// When the user changes the theme, we need to save the new value on local storage
//const toggleTheme = (theme) => {
//    htmlEl.dataset.theme = theme;
//    localStorage.setItem('theme', theme);
//}

//if (currentTheme = 'light') {
//    darkButton.style.display = "block";
//    lightButton.style.display = "none";
//}
//else if (currentTheme = 'dark') {
//    lightButton.style.display = "block";
//    darkButton.style.display = "none";
//}