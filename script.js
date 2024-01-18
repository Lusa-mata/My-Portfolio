// Menu icons
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");


// Menu API: Toggling menu on icon click
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// menu API, closing menu
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("active");
    }
});


// Typing and erasing animation
const words = ["Hi there, I am Lusaduma Mata ", "Junior Software Developer ", "Front-end Web Developer "];
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
const menuLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    

    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
        menuLinks.forEach(link => link.classList.add('fixed'));
        updateActiveLink(); // Update active link on scroll
    } else {
        navbar.classList.remove('fixed');
        menuLinks.forEach(link => link.classList.remove('fixed'));
    }
});


// Additional code for updating the active link based on scrolling
const sections = document.querySelectorAll('section');

function updateActiveLink() {
    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            setActiveLink(index);
        }
    });
}

function setActiveLink(index) {
    menuLinks.forEach(link => link.classList.remove('active'));
    menuLinks[index].classList.add('active');
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
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


function scrollToTop() {
    const scrollOptions = {
        top: 0,
        behavior: 'smooth'
    };

    // Add speed option (optional)
    const speed = 500; // Adjust the speed value (milliseconds) as needed

    if (speed) {
        scrollOptions["duration"] = speed;
    }

    window.scrollTo(scrollOptions);

    // Make the "Home" link active
    const homeLink = document.querySelector('nav ul li:first-child a');
    
    // Remove the "active" class from all links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Add the "active" class to the "Home" link
    homeLink.classList.add('active');
}


// Function to make the "Home" link active
function makeHomeLinkActive() {
    const homeLink = document.querySelector('nav ul li:first-child a');
    
    // Remove the "active" class from all links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Add the "active" class to the "Home" link
    homeLink.classList.add('active');
}


// Function to handle scrolling
function handleScroll() {
    // Check if the user has scrolled to the top of the page
    if (window.scrollY === 0) {
        makeHomeLinkActive();
    }
}


// Add event listener for scrolling
window.addEventListener('scroll', handleScroll);


// Function to scroll to the top with optional speed
function scrollToTop() {
    const scrollOptions = {
        top: 0,
        behavior: 'smooth'
    };

    // Add speed option (optional)
    const speed = 500; // Adjust the speed value (milliseconds) as needed

    if (speed) {
        scrollOptions["duration"] = speed;
    }

    window.scrollTo(scrollOptions);
}