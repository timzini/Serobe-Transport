let menu = document.getElementById("menu");
menu.style.height = "0px";
function toggleMenu() {
    if (menu.style.height == "0px") {
        menu.style.height = "175px";
    }
    else {
        menu.style.height = "0px";
    }
}