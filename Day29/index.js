const btnImg = document.querySelector(".main__btn");
const clickedTimes = document.querySelector(".main__h4--span");

btnImg.addEventListener("click", () => {
	count = parseInt(clickedTimes.innerHTML);
	newCount = count + 1;
	console.log(newCount);
});
