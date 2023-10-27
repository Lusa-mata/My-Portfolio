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




window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-button").style.display = "block";
    } else {
        document.getElementById("back-to-top-button").style.display = "none";
    }
}

document.getElementById("back-to-top-button").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});