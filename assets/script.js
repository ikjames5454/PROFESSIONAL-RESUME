function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}
const years =() => {

const year = document.querySelector(".year")

let now = new Date()
let yr = now.getFullYear()
year.innerHTML = yr
}
years()




