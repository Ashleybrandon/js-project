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
    
    // logic of tabs
    //tabs - if we click and the click is not on an active tab, we switch tabs
    // we move the 'active' and 'visible' classes to the active tab
    
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
        
    }
    */
    document.getElementById('tabSection').classList.add('testClass');
    
    
    
})();