function menuShow() {
    let menuMobile = document.querySelector(".menu-mobile");
    let overlay = document.querySelector(".overlay");

    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "img/menu-hamburguer.svg"
        overlay.style.display = "none";


    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "img/close-menu.svg"
        overlay.style.display = "block"
    }

}

ScrollReveal().reveal(".cta", {
    origin: "left",
    duration: 2000,
    distance: "20%"
});
ScrollReveal().reveal(".titulo", {
    origin: "left",
    duration: 1000,
    distance: "20%"
});
ScrollReveal().reveal(".titulo", {
    origin: "top",
    duration: 1000,
    distance: "20%"
});
ScrollReveal().reveal(".paragrafoTecnologia", {
    origin: "right",
    duration: 2000,
    distance: "20%"
});
ScrollReveal().reveal(".imagemSectionTecnologia", {
    origin: "left",
    duration: 1000,
    distance: "20%"
});
ScrollReveal().reveal(".fa", {
    origin: "left",
    duration: 2000,
    distance: "30%"
});