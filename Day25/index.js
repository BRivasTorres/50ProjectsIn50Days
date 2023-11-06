const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
	let scrollPos = window.scrollY;
	let half = window.innerHeight / 2;

	if (scrollPos >= half) {
		nav.style.backgroundColor = "white";
		nav.style.color = "#222222";
	} else {
		nav.style.backgroundColor = "#222222";
		nav.style.color = "white";
	}
});
