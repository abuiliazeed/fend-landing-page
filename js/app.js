/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


var sections = [...document.querySelectorAll('section')];
var navArray = [""];
var navMenu = document.getElementById('navbar__list');
// console.dir(sections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (i = 0; i <= sections.length - 1; i++) {
    var navItem = document.createElement('li');     // create li element.

    navItem.innerHTML = `<a href=#${sections[i].id}>${sections[i].getAttribute('data-nav')}</a>`;      // assigning text to li using array value.

    navMenu.appendChild(navItem);     // append li to ul.
}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


