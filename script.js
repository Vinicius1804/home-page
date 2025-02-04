

function menuShow() {
    let menuMobile = document.querySelector(".menu-mobile");
    let overlay = document.querySelector(".overlay");
    
    if (menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "img/menu-hamburguer.svg"
        overlay.style.display = "none";

        
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "img/close-menu.svg"
        overlay.style.display = "block"
    }

}