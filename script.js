(function(){
    "use strict";
    
 let menuButton = document.getElementById("menuButton"),
     sideNav = document.getElementById("sideNav");
    
    function toggleMenu() {
        
        if (sideNav.style.display) {
            sideNav.style.display = "";

        } else {
            sideNav.style.display = "block";
            
        }
    }
    
   menuButton.addEventListener("click", toggleMenu);

   /*
JQuery menu toggle

$(function(){
    $('.menu-icon').on('click', function(){
        $('.mobile-nav').toggleClass('showing')
    });
}); 

*/
       
    
// logic of tabs
//tabs - if we click and the click is not on an active tab, we switch tabs
// we move the 'active' and 'visible' classes to the active tab
// order - function, variables, preventdef, for loop to remove, add classes, 
// add eventlistener for click and function
  

// a function that defines an event, using event as a paramenter
//later passing the function to the click event
// variables for links, tabs, list items
function tabClick(event) {
    let elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelectorAll('.tabs li a'),
        tabContents = document.querySelectorAll('.tab-contents li');

    // If we click an element whos href contains "tab-", cancel the event
    // that would normally occur as a result of the click
    if (elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

       //for loop that parses thru the lis of ul.tabs
       //then removes classes noted
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                tabContents[i].classList.remove('visible');
            }
    //add noted classes to the element of the event, and to the link elements
            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible');
    }
    
}
    
    
// Add an event listener for document click
document.addEventListener('click', tabClick);


/*
 * - Add an event listener for document click
 * - Define a function that filters the unwanted click events on the document
 */

// Add an event listener for document click
document.addEventListener('click', lightboxClick);

// Define a function that filters the unwanted click events on the document
function lightboxClick(event) {
    var ele = event.target,
        eleID = ele.getAttribute('id'),
        lightboxImg = document.getElementById('lightboxImage'),
        lightbox = document.getElementById("lightbox-overlay"),
        newImg = new Image();

    // If we click an element with the attribute "data-lightbox", show the lightbox
    if (ele.hasAttribute('data-lightbox')) {
        event.preventDefault();

        newImg.onload = function() {
            lightboxImg.src = this.src;
        }

        lightboxImg.src = '';
        newImg.src = ele.getAttribute('data-lightbox');
        lightbox.classList.add('visibleb');
    }

    // If we click any of these 2 elements, close the lightbox
    if (eleID == 'lightboxImage' || eleID == 'lightbox-overlay') {
        event.preventDefault();

        lightbox.classList.remove('visibleb');
    }
}



})();

