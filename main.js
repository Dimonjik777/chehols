let products = document.querySelectorAll(".product"); // products blocks
let left_arrow = document.querySelectorAll(".arrow_left");
let right_arrow = document.querySelector(".arrow_right");

let header = document.querySelector(".header");

let shoping_arrow = document.querySelector(".arrow");

function checkScroll() {
	let scrollPos = window.scrollY;
	if (scrollPos > 0) {
		header.classList.add('small__header');

	} else{
		header.classList.remove('small__header');
	}
}
if(window.innerWidth > 1655){
window.addEventListener("scroll", checkScroll);
window.addEventListener("DOMContentLoaded", checkScroll);
}
let clicks = 0;

// Scroll Top

let buttonTop = document.querySelector(".scroll__top"); //button for scroll top

function checkScrollDown() {
	let scrollPos = window.scrollY;
	if(scrollPos > 0){
		buttonTop.classList.add('scroll__top_active');
	} else{
		buttonTop.classList.remove('scroll__top_active');
	}
}

window.addEventListener("scroll", checkScrollDown);
window.addEventListener("DOMContentLoaded", checkScrollDown);

function scrollTop(){
	if(window.pageYOffset > 0){
		window.scrollBy(0, -60); // moving scroll to top of 60px
		setTimeout(scrollTop, 0); // works until scrolling is on top
	}
}

buttonTop.addEventListener("click", scrollTop);