const toggleMenu = (toggle) => {
    let menu = document.querySelector(".side-menu");

    if (toggle === true){
        menu.style = 'transform: translateX(0%); position:fixed;';
    }
    else {
        menu.style = 'transform: translateX(-110%);';
    }
}
