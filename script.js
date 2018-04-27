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
       
    
// logic of tabs
//tabs - if we click and the click is not on an active tab, we switch tabs
// we move the 'active' and 'visible' classes to the active tab
  

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

    
})();