const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
const btnClear = document.querySelector(".clear");
const count = document.querySelector(".count");
const canvas = document.querySelector(".canvas");
const colorEl = document.querySelector(".color");

let currCount = parseInt(count.innerHTML, 10);

btnPlus.addEventListener("click", () => updateCount("plus"));
btnMinus.addEventListener("click", () => updateCount("minus"));

const updateCount = (btn) => {
	if (btn === "plus") {
		currCount < 50 ? (currCount += 5) : currCount;
	} else {
		currCount > 5 ? (currCount -= 5) : currCount;
	}
	count.innerHTML = currCount;
};
