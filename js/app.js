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

// sections variable is an Array populated with section tag elements
var sections = [...document.querySelectorAll('section')]; 

//navMenu is a Variable that contain the navbar_list element we will use it as a parent to append navItems to it Later
var navMenu = document.getElementById('navbar__list');
// console.dir(sections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// smoothScroll is a helper function that scroll smoothly to a elemnt using the scrollTo
function smoothScroll(ele){
    //getting the element position relative to the viewport
    let rect = ele.getBoundingClientRect();

    //scrolling to the element coordinates notice that we add window.scrollY in order to take into considration our scrolling
    window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: 'smooth'
      });
    }

// isInviewport is a helper function that check if the element is near the top of the viewport or not
function isInViewport(ele) {
        var rect = ele.getBoundingClientRect();
        // returning true if the element bottom is visible and the top is near the top of the view port
        return (
            rect.top >= -10 && rect.top <=300
            // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// We will loop the entire DOM to fetch all section elements using a for loop over the sections array items
function buildNavBar(){for (i = 0; i <= sections.length - 1; i++) {
    // we create li elements and store it in a navItem
    let navItem = document.createElement('li');

    // we assign section id to elID to be used later for navigation
    let elID = `section${i+1}`;

    //we  add id to the li element
    navItem.setAttribute('id',`${i+1}`);

    // we create an anchor element and store it in aEl
    let aEl = document.createElement('a');

    //adding menu__link class to the anchors
    aEl.classList.add('menu__link');

    // we set the href attribute to execute a smoothScroll function to desired section element
    aEl.setAttribute('href',`javascript:smoothScroll(${elID})`);

    // we get the anchor text from the section's data-nav attribute
    aEl.textContent=`${sections[i].getAttribute('data-nav')}`;

    // we append the anchor element to the li element
    navItem.appendChild(aEl);

    // we append the li element to the ul element
    navMenu.appendChild(navItem);     
}}
// Note that the Navigation is built after all the DOM elements are fully loaded
window.addEventListener('DOMContentLoaded', (event) => buildNavBar());
// the scrollCheck function Add class 'active' to section when near top of viewport using the scrollCheck 
  function scrollCheck() {
    for (i = 0; i <= sections.length - 1; i++) {
        let elID = `section${i+1}`;
        let ele = document.getElementById(elID);
        let liId = i+1;
        let liEl = document.getElementById(liId);
        // if the element is near the top of viewport we add the your-active-class and remove it if it is not
        if(isInViewport(ele)){
          ele.classList.add('your-active-class');
          liEl.classList.add('li-active');}
        else{
          ele.classList.remove('your-active-class');
          liEl.classList.remove('li-active');}
    } 
  }
// we call the the scrollCheck function only if any scrolling happens
window.onscroll = function() {scrollCheck()};

/**
 * End Main Functions
 * Begin Events
 * 
*/

