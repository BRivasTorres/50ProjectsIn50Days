let hour = document.querySelector(".hour");
let date = document.querySelector(".date");
let hourClock = document.querySelector(".clock-hour");
let minuteClock = document.querySelector(".clock-minute");
let secondsClock = document.querySelector(".clock-seconds");
let themBtn = document.querySelector(".theme-btn");
const BODY = document.body;

themBtn.addEventListener("click", () => {
	BODY.classList.toggle("dark-theme");
	console.log(BODY.classList.contains("dark-theme"));
	if (BODY.classList.contains("dark-theme")) {
		hour.style.color = "var(--light-color)";
		themBtn.style.backgroundColor = "var(--light-color)";
		themBtn.style.color = "var(--dark-color)";
		hourClock.style.backgroundColor = "var(--light-color)";
		minuteClock.style.backgroundColor = "var(--light-color)";
	} else {
		hour.style.color = "var(--dark-color)";
		themBtn.style.backgroundColor = "var(--dark-color)";
		themBtn.style.color = "var(--light-color)";
		hourClock.style.backgroundColor = "var(--dark-color)";
		minuteClock.style.backgroundColor = "var(--dark-color)";
	}
});

const setTime = () => {
	const DATE = new Date();
	const OPTIONS = {
		month: "short",
		weekday: "long",
		day: "numeric",
	};
	const HOURS = DATE.getHours();
	const MINUTES = DATE.getMinutes();
	const SECONDS = DATE.getSeconds();
	const currDate = DATE.toLocaleDateString("en-US", OPTIONS);

	let period;
	HOURS <= 12 ? (period = "AM") : (period = "PM");

	hourClock.style.transform = `translate(-50%, -100%) rotate(${scale(
		HOURS,
		0,
		12,
		0,
		360
	)}deg)`;
	minuteClock.style.transform = `translate(-50%, -100%) rotate(${scale(
		MINUTES,
		0,
		60,
		0,
		360
	)}deg)`;
	secondsClock.style.transform = `translate(-50%, -100%) rotate(${scale(
		SECONDS,
		0,
		60,
		0,
		360
	)}deg)`;

	date.innerHTML = currDate;
	hour.innerHTML = `${HOURS}:${MINUTES} ${period}`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
