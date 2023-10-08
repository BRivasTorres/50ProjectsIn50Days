let hour = document.querySelector(".hour");
let date = document.querySelector(".date");
let hourClock = document.querySelector(".clock-hour");
let minuteClock = document.querySelector(".clock-minute");
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
		minuteClock.style.backgroundColor = 0("var(--dark-color)");
	}
});
