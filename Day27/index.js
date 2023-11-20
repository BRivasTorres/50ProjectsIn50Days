const notificationBtn = document.querySelector(".btn");
const notificationsWrapper = document.querySelector(".notifications");

const notifications = {
	0: "Notification One",
	1: "Notification Two",
	2: "Notification Three",
	3: "Notification Four",
};

let currNoti = 0;
let col = 0;

notificationBtn.addEventListener("click", () => {
	showNotify();
});

const color = () => {
	let currCol = `var(--color-${col})`;
	col === 2 ? (col = 0) : col++;
	return currCol;
};

const showNotify = () => {
	let divNoti = document.createElement("div");
	divNoti.classList.add("notification");

	let message = `${notifications[currNoti]}`;
	divNoti.innerHTML = `${message}`;

	divNoti.style.color = `${color()}`;

	notificationsWrapper.appendChild(divNoti);

	currNoti === 3 ? (currNoti = 0) : currNoti++;
};

let delay = 1400;
const removeNotify = () => {
	let divs = document.querySelectorAll(".notification");
	if (divs.length > 0) {
		divs[0].parentNode.removeChild(divs[0]);
	}
	delay *= 0.9;
	setTimeout(removeNotify, delay);
};

setTimeout(removeNotify, delay);
