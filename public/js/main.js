const navbar = document.getElementById('navbar')
const contentOutlet = document.getElementById('content')

fetch("../../pages/home.html").then(res => res.text()).then(PageHTML => contentOutlet.innerHTML = PageHTML)

function SelectPage(number) {
    if (number === 0) {
        fetch("../../pages/home.html").then(res => res.text()).then(PageHTML => contentOutlet.innerHTML = PageHTML)
    } else if (number === 1) {
        fetch("../../pages/about.html").then(res =>res.text()).then(PageHTML => contentOutlet.innerHTML = PageHTML)
    }
}

/*
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-200px"; // Adjust the value based on navbar height
    }
    prevScrollpos = currentScrollPos;
}

 */

