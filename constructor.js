//create a constructor function for instances of toggling
//include an event listener etc .. watch video on constructor functions
/*can i create a var to store the instance, create a function, then fire off any instance i need of the function? sounds like the way forward...*/

/*var sideNav = document.getElementById('sideNav');
var menuButton = document.getElementById('menuButton');

function toggle() {
    if(sideNav.style.display) {
        sideNav.style.display = '';
    } else {
        sideNav.style.display = 'block';
    }
}

menuButton.addEventListener('click', toggle); 

---------------

var ToggleBlock = function(one, two, three) {
this.one = one;
this.two = two;
this.three = three;
}

ToggleBlock.prototype.toggle = function() {
    if(this.style.display) {
        this.style.display = '';
    } else {
        this.style.display = 'block';
    }
}

var menuButton = document.getElementById('menuButton');
var sideNav = new ToggleBlock(document.getElementById('sideNav'));

var sideNav = document.getElementById('sideNav');
var menuButton = document.getElementById('menuButton');

function toggle(gheh) {
    this.gheh = gheh;
    if(gheh.style.display) {
        gheh.style.display = '';
    } else {
        gheh.style.display = 'block';
    }
}

var bleh = new toggle(sideNav);

menuButton.addEventListener('click', toggle); 



var menuButtons = document.querySelectorAll('.menuButton');
menuButtons.forEach(function(btn){
  btn.addEventListener("click", toggle.bind(this, btn.id));
})

function toggle(id) {
    var sideNav = document.querySelectorAll('.nav_' + id);
    sideNav.forEach(function(el){
      if (el.style.display == 'none'){
        el.style.display = "block";
      } else {
        el.style.display = "none"
      }
    })
}
*/




function toggle() {

    var sideNav = document.getElementById('sideNav');
    var menuButton = document.getElementById('menuButton');

    if(sideNav.style.display) {
        sideNav.style.display = '';
    } else {
        sideNav.style.display = 'block';
    }
}

menuButton.addEventListener('click', toggle); 



/*
JQuery menu toggle

$(function(){
    $('.menu-icon').on('click', function(){
        $('.mobile-nav').toggleClass('showing')
    });
}); 

*/