const divImg = document.querySelector(".main__div");
const clickedTimes = document.querySelector(".main__h4--span");

divImg.addEventListener("click", (e) => {
	count = parseInt(clickedTimes.innerHTML);
	newCount = count + 1;
	clickedTimes.innerHTML = `${newCount}`;
	createHeart(e);
});

const createHeart = (e) => {
	const heart = document.createElement("i");
	heart.classList.add("fas");
	heart.classList.add("fa-heart");

	const x = e.clientX;
	const y = e.clientY;

	const leftOffset = e.target.offsetLeft;
	const topOffset = e.target.offsetTop;

	const xInside = x - leftOffset;
	const yInside = y - topOffset;

	heart.style.top = `${yInside}px`;
	heart.style.left = `${xInside}px`;

	divImg.appendChild(heart);

	setTimeout(() => heart.remove(), 1000);
};
