let windowWidth = window.innerWidth; 
// let scrollWidth = calcScroll();

// menu===========================================
const menu = document.querySelector(".menu");
// const hamburger = document.querySelector(".hamburger");
// const menuItems = document.querySelectorAll(".menu_link");
// const navLinks = document.querySelectorAll(".menu_link");
// const authBtns = document.querySelectorAll(".menu_btn");

// windowWidth > 991 ? menu.classList.add("active") : null;

class HideMenu {
    scrollPrev = 0;
    constructor() {}

    hider(scroll, block, width) {
        if (width > 991) {
            return (() => {
                scroll > 100 && scroll - this.scrollPrev > 0 
                    ? block.classList.remove("active")
                    : block.classList.add("active"); 
               
                this.scrollPrev = scroll;
            })()
        }
    }
}

const throttledHideMenu = throttle(new HideMenu().hider, 120);
window.addEventListener("scroll", () => throttledHideMenu(this.scrollY, menu, windowWidth));




function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { 
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;

        func.apply(this, arguments); 

        setTimeout(function() {
        isThrottled = false; 
        if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
        }
        }, ms);
    }

    return wrapper;
}