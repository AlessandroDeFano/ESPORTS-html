/**
 * @file: main.js
 * @author: gruppo 3
 * making the navbar show and hide when clicking on the 
 * hamburger menu 
 */

// getting the hamburger menu from the html page
let hamburgerMenu = document.getElementById("hamburger-menu");

// getting thr navbar from the html file
let navbar = document.getElementById("navbar");

/**
 * Function that will togggle the visibility of the navbar
 * for the mobile page
 */
hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle("visible");
});