let twiter = document.querySelector(".twt");
let youTube = document.querySelector(".yt");
let faceBook = document.querySelector(".fb");

const twiterCount = () => {
	setTimeout(() => {
		let currCount = parseInt(elemnts.innerHTML, 10);
		let newCount = currCount + 100;
		twiter.innerHTML = `${newCount}`;
		if (newCount < 12000) {
			twiterCount();
		}
	}, 10);
};

window.addEventListener("DOMContentLoaded", () => {
	twiterCount();
});
