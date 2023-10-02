// menu icons
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

//menu API, pressing icon to view menu
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});

//menu API, closing menu
window.addEventListener("resize", () => {
if (window.innerWidth > 768) {
    menu.classList.remove("active");
    }
});
