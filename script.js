(function(){
    'use strict';


       
    
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

    //add an alternative image by changing the src
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
    
// create vars for welcome message
    var greeting = 'Howdy';
    var    name = 'Molly';
    var    message = ', please check your order';
     var   welcome = greeting + name + message;
    
// create vars to hold details about the sign
    var sign = 'Montague House';
     var   tiles = sign.length;
     var   subTotal = tiles * 5;
     var   shipping = 7;
     var   grandTotal = subTotal + shipping;
    
// Get the element that has an ID of greeting
var el = document.getElementById('greeting');
//Replace the content if that element with the personalised welcome message
 el.textContent = welcome;
    
//Get the element that has an ID of userSign then update its contents
    var elSign = document.getElementById('userSign');
    elSign.textContent = sign;
    
//Get the element that has an ID of tiles then update its contents
    var elTiles = document.getElementById('tiles');
     elTiles.textContent = 'tiles';
    
// Get the element that has an Id of subTotal then update its contents
    var elSubtotal = document.getElementById('subTotal');
        elSubtotal.textContent = '$' + subTotal;
    
    var elShipping = document.getElementById('shipping');
        elShipping.textContent = '$' + shipping;
    
    var elGrandTotal = document.getElementById('grandTotal');
        elGrandTotal.textContent = '$' + grandTotal;
    //on the second line of each set of statements, the vars from the top are being output
       

    let wDate = new Date(),
    hourNow = wDate.getHours(),
    dayGreeting;
    
    if ( hourNow > 18 ) {
        dayGreeting = 'Good Evening';
    } else if ( hourNow > 12 ) {
        dayGreeting = 'Good Afternoon';
    } else if (hourNow > 0) {
        dayGreeting = 'Good Morning';
    } else {
        dayGreeting = 'hello!';
    }
    
      mainTitle.textContent = dayGreeting;  

    
    
    
    
    
/*
 * - Declare variables
 * - Get the slide width
 * - Set the proper left value for each slide
 * - Calculate tallest slide
 * - Add the animated class to each slide
 * - Add an event listener for next button
 * - Add an event listener for previous button
 * - Add an event listener for window resize
 * - Declare a function that calculates the tallest slide
 * - Declare a function that will change the slide position
 */
var slides = document.getElementsByClassName('slide'),
    slider = document.getElementById('slider'),
    cursor = 0,
    slideWidth = 0,
    topHeight = 0,
    slideCount = slides.length;

if (slideCount > 0) {
    // Get the slide width
    slideWidth = slides[0].offsetWidth;

    // Set the proper left value for each slide
    for (var i = 0; i < slideCount; i++) {
        slides[i].style.left = slideWidth * i + "px";
    }

    // Calculate tallest slide
    calculateTallestSlide();

    // Add the animated class to each slide
    for (i = 0; i < slideCount; i++) {
        slides[i].classList.add('animated');
    }

    // Add an event listener for next button
    document.getElementById('next').addEventListener('click', function(event) {
        event.preventDefault();

        if (cursor < slideCount - 1) {
            moveSlides('forward');
            cursor++;
        }
    });

    // Add an event listener for previous button
    document.getElementById('prev').addEventListener('click', function(event) {
        event.preventDefault();

        if (cursor > 0) {
            moveSlides('backward');
            cursor--;
        }
    });

    // Add event listener for window resize
    window.addEventListener('resize', function() {
        // Get the new slide width
        slideWidth = slides[0].offsetWidth;

        // Recalculate the left position of the slides
        for (i = 0; i < slides.length; i++) {
            if (i <= cursor) {
                slides[i].style.left = "-" + slideWidth * (cursor - i) + "px";
            } else if (i > cursor) {
                slides[i].style.left = slideWidth * (i - cursor) + "px";
            }
        }

        // Recalculate the height of the tallest slide
        calculateTallestSlide();
    });
}

// Declare a function that calculates the tallest slide
function calculateTallestSlide() {
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }

    slider.style.height = topHeight + "px";
}

// Declare a function that will change the slide position
function moveSlides(direction) {
    for (var j = 0; j < slides.length; j++) {
        if (direction == "backward") {
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '') + slideWidth + "px";
        } else if (direction == "forward") {
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '') - slideWidth + "px";
        }
    }
}




    
})();

