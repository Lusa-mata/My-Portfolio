// Menu icons
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

// Menu API: Toggling menu on icon click
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Typing and erasing animation
const words = ["Hi there, I am Lusaduma Mata ", "A software developer intern "];
let index = 0;
let isTyping = true;
let currentWord = "";
const headingElement = document.getElementById("lusaduma-mata");

function updateHeading() {
    headingElement.textContent = currentWord;

    if (isTyping) {
        currentWord = words[index].substring(0, currentWord.length + 1);
        if (currentWord === words[index]) {
            isTyping = false;
            setTimeout(updateHeading, 2000);
        } else {
            setTimeout(updateHeading, 100);
        }
    } else {
        currentWord = words[index].substring(0, currentWord.length - 1);
        if (currentWord === "") {
            isTyping = true;
            index = (index + 1) % words.length;
            setTimeout(updateHeading, 1000);
        } else {
            setTimeout(updateHeading, 40);
        }
    }
}

// Initial call to start the loop
updateHeading();

// JavaScript code to add/remove the "fixed" class
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('fixed');
        updateActiveLink(); // Update active link on scroll
    } else {
        navbar.classList.remove('fixed');
    }
});

// Function to update the active link based on scroll position
function updateActiveLink() {
    // Implement your logic to highlight the active link here
    // This function can be expanded based on your navigation structure
}








//menu bar icon when scrolling

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('fixed');
        menuIcon.classList.add('fixed'); // Add the fixed class to the menu icon
        updateActiveLink(); // Update active link on scroll
    } else {
        navbar.classList.remove('fixed');
        menuIcon.classList.remove('fixed'); // Remove the fixed class from the menu icon
    }
});