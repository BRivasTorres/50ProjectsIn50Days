const openNav = document.querySelector(".nav__open");
const closeNav = document.querySelector(".nav__close")
const mainClose = document.querySelector(".close__main")
const blackCol = document.querySelector(".nav__color2")
const redCol = document.querySelector(".nav__color1")

openNav.addEventListener("click", () => {
    setTimeout(() => {
		blackCol.style.transform = "translateX(50px)";
	}, 0);
	setTimeout(() => {
		redCol.style.transform = "translateX(25px)";
	}, 200);
	setTimeout(() => {
		mainClose.style.transform = "translateX(0px)";
	}, 400);
})

closeNav.addEventListener("click", () => {    
    setTimeout(() => {
		mainClose.style.transform = "translateX(-500px)";
	}, 0);
	setTimeout(() => {
		redCol.style.transform = "translateX(-500px)";
	}, 200);
	setTimeout(() => {
		blackCol.style.transform = "translateX(-500px)";
	}, 400);
})