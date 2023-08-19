let twiter = document.querySelector(".twt");
let youTube = document.querySelector(".yt");
let faceBook = document.querySelector(".fb");

const updateCound = (element, followers) => {
	setTimeout(() => {
		let currCount = parseInt(element.innerHTML, 10);
		let newCount = currCount + 100;
		element.innerHTML = `${newCount} `;
		if (newCount < followers) {
			updateCound(element, followers);
		}
	}, 10);
};

window.addEventListener("DOMContentLoaded", () => {
	updateCound(twiter, 12000);
	updateCound(youTube, 5000);
	updateCound(faceBook, 7500);
});
