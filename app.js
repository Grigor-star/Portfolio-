const header = document.querySelector(".header")
const headerInner = document.querySelector(".header_inner")

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;
    
    if(scrollPos > 0) {
        header.classList.add("inner_2")
        headerInner.classList.add("inner_3")
    }else {
         header.classList.remove("inner_2")
         headerInner.classList.remove("inner_3")
    }
    
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
})