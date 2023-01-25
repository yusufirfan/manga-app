const miniNav = document.querySelector(".mini-nav")
const miniNavButton = document.querySelector(".mini-nav .nav__button");
const miniNavArea = document.querySelector(".mini-nav .nav__area");
const miniNavClose = document.querySelector(".nav__area__item .fa-xmark")

miniNav.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-bars") || e.target.classList.contains("nav__button")){
        miniNavButton.classList.toggle("hidden");
        miniNavArea.classList.toggle("hidden");
    }
    else if(miniNavButton.classList.contains("hidden") && e.target.classList.contains("fa-xmark")){
        miniNavButton.classList.toggle("hidden");
        miniNavArea.classList.toggle("hidden"); 
    }
})