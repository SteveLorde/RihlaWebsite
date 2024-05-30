const contentOutlet = document.getElementById('content')

fetch("../../pages/home.html").then(res => res.text()).then(PageHTML => contentOutlet.innerHTML = PageHTML)

function SelectPage(number) {
    if (number === 0) {
        fetch("../../pages/home.html").then(res => res.text()).then(PageHTML => contentOutlet.innerHTML = PageHTML)
    } else if (number === 1) {
        fetch("../../pages/about.html").then(res =>res.text()).then(PageHTML => contentOutlet.innerHTML = PageHTML)
    }
}