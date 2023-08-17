let openClose = document.querySelector(".open-close");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let li = document.querySelectorAll(".li");
let nav = document.querySelector(".nav");

openClose.addEventListener("click", () => {
	li.forEach((li) => {
		li.classList.toggle("active");
	});
	nav.classList.toggle("active");
});
