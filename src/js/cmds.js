/* Funções */
function activeMenuMobile() {
    let menu = document.getElementById("nav-menu");
    let hamburger = document.getElementById("hamburger");
    menu.classList.toggle("activeMenuMobile");
    hamburger.classList.toggle("active");
}
function showTextProj(element) {
    element[0].classList.remove("hidden");
}
function hideTextProj(element) {
    element[0].classList.add("hidden");
}
function actualPage() {
    let url_atual = window.location.href;
    let url_div = url_atual.split("/");
    let page = url_div.pop();
    let menu_itens = document.getElementsByClassName("menu-item");

    switch (page) {
        case "about.html":
            for(item of menu_itens) {
                item.classList.remove("page-activated");
            }
            menu_itens[1].classList.add("page-activated");
            break;
        case "projects.html":
            for(item of menu_itens) {
                item.classList.remove("page-activated");
            }
            menu_itens[2].classList.add("page-activated");
            break;
        case "contact.html":
            for(item of menu_itens) {
                item.classList.remove("page-activated");
            }
            menu_itens[3].classList.add("page-activated");
            break;
        default:
            for(item of menu_itens) {
                item.classList.remove("page-activated");
            }
            menu_itens[0].classList.add("page-activated");
            break;
    }
}
function isSmallScreen() {
    let screenSize = window.screen.width;
    let isGrid = document.getElementsByClassName("grid");
    let isGridCol = document.getElementsByClassName("grid-col-131");

    if(screenSize < 900) {
        for(item of isGrid) {
            item.classList.remove("grid");
            item.classList.add("flex");
        };
        for(item of isGridCol) {
            item.classList.remove("grid-col-131");
        };
    } else {
        for(item of isGrid) {
            item.classList.add("grid");
            item.classList.remove("flex");
        };
        for(item of isGridCol) {
            item.classList.add("grid-col-131");
        };
    }
}

window.addEventListener('load', () => {
    actualPage();
});
window.addEventListener('resize', function () {
    //isSmallScreen();
});
document.addEventListener('DOMContentLoaded', function() {
    //isSmallScreen();
})