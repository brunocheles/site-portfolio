function hideMenuMobile() {
    let checkbox = document.getElementById("toggle");

    if(checkbox.checked) {
        document.getElementById("navMenu").classList.add("hideMenuMobile");
    }else {
        document.getElementById("navMenu").classList.remove("hideMenuMobile");
    }
}