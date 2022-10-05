const headerInner = document.querySelector(".header")

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;
    
    if(scrollPos > 0) {
        headerInner.classList.add("inner_2")
    }else {
         headerInner.classList.remove("inner_2")
    }
    
});
