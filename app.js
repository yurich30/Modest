// show contact form

let sendMsgButton = document.querySelector(".contact_btn")
let contactForm = document.querySelector(".contact_form")


sendMsgButton.addEventListener("click", function() {
    contactForm.classList.add("show")
    sendMsgButton.classList.add("hide")
})


// slider 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        }
    );
});


// burger menu

let mobileMenu = document.querySelector(".mobile_menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
	mobileMenu.classList.toggle("active_menu");
	if (mobileMenu.classList.contains("active_menu")) {
		mainMenu.classList.add("active_menu");
	} else {
		mainMenu.classList.remove("active_menu")
	}
})

let menuItem = document.querySelectorAll(".menu_item")
for (i=0; i < menuItem.length; i++) {
	menuItem[i].addEventListener("click", function() {
		mobileMenu.classList.remove("active_menu");
		mainMenu.classList.remove("active_menu");
	})
}

// scroll

$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});