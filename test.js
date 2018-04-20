(function(){
'use strict';
    let navButton = document.getElementById('nav-button'),
        sideNav = document.getElementById('mobile-nav');
    
    function showNav(event) {
        if (sideNav.style.display){
            sideNav.style.display = "";
        } else {
            sideNav.style.display = "block";
        }
        navButton.addEventListener('click', showNav);
    }
})();