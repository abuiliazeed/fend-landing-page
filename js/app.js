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
var navMenu = document.getElementById('navbar__list');
// console.dir(sections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Scroll to anchor ID using scrollTO event
function smoothScroll(element){
    var rect = element.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    window.scrollTo({
        top: rect.top,
        behavior: 'smooth'
      });
    }



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (i = 0; i <= sections.length - 1; i++) {
    var navItem = document.createElement('li');
    var elID = `section${i+1}`;
    console.log(elID);
    var element = document.getElementById(elID);
    console.log(element);
    navItem.textContent = sections[i].getAttribute('data-nav');
    console.log(sections[i].getAttribute('data-nav'));
    // navItem.innerHTML = `<a href=#${sections[i].id}>${sections[i].getAttribute('data-nav')}</a>`;      // assigning text to li using array value.
    navItem.addEventListener('click',function(){
        var rect = element.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        window.scrollTo({
            top: rect.top,
            behavior: 'smooth'
          });});   
    navMenu.appendChild(navItem);     // append li to ul.
}




// Add class 'active' to section when near top of viewport



  

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


