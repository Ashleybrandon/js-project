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
    
    /*
    document.addEventListener('click', tabClick);
    
    function tabClick(event) {
        let elem = event.target,
            elemHREF = elem.getAttribute('href'),
            tabs = document.querySelectorAll('.tabs li a'),
            tabcontents = document.querySelectorAll('.tab-contents li');
        
        if (elemHREF != null && elemHREF.indexOf('tab-') == -1 ) {
            event.preventDefault();
            
            if (elem.className.indexOf('active') == -1 ) {
                //remove active class from tabs and 'visible' class from tab contents
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active');
                    tabcontents[i].classList.remove('visible');
                }
                
                elem.classList.add('active');
                document.getElementById(elemHREF).classList.add('visible');
            }
        }
        
    } */
    


// Define a function that filters the unwanted click events on the document
function tabClick(event) {
    let elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelectorAll('.tabs li a'),
        tabContents = document.querySelectorAll('.tab-contents li');

    // If we click an element whos href contains "tab-", proceed
    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

        // If we didn't click an active item, switch tabs
        if (elem.className.indexOf('active') == -1) {
            // Remove the active class from the tabs and the visible class from the tab contents
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                tabContents[i].classList.remove('visible');
            }

            // Add the active class to the clicked element and the visible class to the corresponding tab
            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible');
        }
    }
    
}
    
    
        // Add an event listener for document click
document.addEventListener('click', tabClick);
    
    
    
    
    
    
    
    
    
    
    
/*
    let tabs = document.querySelector('.tabs'),
     panels = document.querySelector('.panel');
        tabs.addEventListener('click', function(e){
            if(e.target.tagName == "LI"){
                let targetPanel = document.querySelector(e.target.dataset.target);
                panels.forEach(function(panel){
                    if (panel == targetPanel){
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                })
            }
        })
             */                 
    
    
})();