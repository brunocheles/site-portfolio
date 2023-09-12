function hideMenuMobile() {
    let checkbox = document.getElementById("toggle");

    if(checkbox.checked) {
        document.getElementById("navMenu").classList.add("hideMenuMobile");
    }else {
        document.getElementById("navMenu").classList.remove("hideMenuMobile");
    }
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

    let menu_itens = document.getElementsByClassName("menu-btn");

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

function preLoad() {
    let pre_load = document.getElementById("preloader");
    pre_load.innerHTML = (`
        <div id="status">&nbsp;</div>
        <div class="loader">
            <span class="loader-pin"></span>
            <span class="loader-title">Carregando...</span>
        </div>
    `);
}