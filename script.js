function menuShow() {
    let menuMobile = document.querySelector(".menu-mobile");
    if (menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "img/menu-hamburguer.svg"
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "img/close-menu.svg"

    }

}