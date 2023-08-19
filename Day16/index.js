let remained = document.querySelector(".remained");
let cups = document.querySelectorAll(".cup-small");

remained.addEventListener("click", () => {});

cups.forEach((cup, i) => {
	cup.addEventListener("click", () => {
		cups[i].classList.add("active");
	});
});
