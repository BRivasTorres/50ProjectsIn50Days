const cupContainer = document.querySelector(".cups");
const cups = document.querySelectorAll(".cup-small");
const porcentage = document.querySelector(".porcentage");
const remained = document.querySelector(".remained");
const remainedAmount = document.querySelector(".remained-amount");
let activeCupIndex = -1;

cupContainer.addEventListener("click", (event) => {
	const clickedCup = event.target;
	const cups = Array.from(cupContainer.children);
	const clickedCupIndex = cups.indexOf(clickedCup);

	if (clickedCupIndex > activeCupIndex) {
		for (let i = 0; i <= clickedCupIndex; i++) {
			cups[i].classList.add("active");
		}
	} else {
		for (let i = clickedCupIndex + 1; i < cups.length; i++) {
			cups[i].classList.remove("active");
		}
	}

	activeCupIndex = clickedCupIndex;
	updateBigCup();
});

const updateBigCup = () => {
	const activeCups = document.querySelectorAll(".cup-small.active").length;
	const totalCups = cups.length;

	if (activeCups !== 0) {
		porcentage.style.visibility = "visible";
		porcentage.style.height = `${(activeCups / totalCups) * 330}px`;
		porcentage.innerHTML = `${(activeCups / totalCups) * 100} %`;
	}

	if (activeCups === totalCups) {
		remained.style.visibility = "hidden";
		remained.style.height = "0";
	} else {
		remained.style.visibility = "visible";
		remained.innerHTML = `${2 - (250 * activeCups) / 1000}L`;
	}
};
