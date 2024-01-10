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



//typing and erasing animation
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
          setTimeout(updateHeading, 2000); // Wait before starting the erasing
        } else {
          setTimeout(updateHeading, 100); // Adjust the typing speed (in milliseconds) as needed
        }
      } else {
        currentWord = words[index].substring(0, currentWord.length - 1);
        if (currentWord === "") {
          isTyping = true;
          index = (index + 1) % words.length;
          setTimeout(updateHeading, 1000); // Wait before starting the typing again
        } else {
          setTimeout(updateHeading, 40); // Adjust the erasing speed (in milliseconds) as needed
        }
      }
    }

    // Initial call to start the loop
    updateHeading();






    // JavaScript code to add/remove the "fixed" class
const navbar = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.menu a');
const menuIconBars = document.querySelectorAll('.bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
        menuLinks.forEach(link => link.classList.add('fixed'));
        menuIconBars.forEach(bar => bar.classList.add('fixed'));
    } else {
        navbar.classList.remove('fixed');
        menuLinks.forEach(link => link.classList.remove('fixed'));
        menuIconBars.forEach(bar => bar.classList.remove('fixed'));
    }
});