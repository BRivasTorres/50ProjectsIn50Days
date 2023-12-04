const inputSpeed = document.querySelector("#speed");
const text = document.querySelector(".main__text");
const str = "We love programming!";
let i = 1;
let s = 300 / inputSpeed.value;

inputSpeed.addEventListener("click", (e) => (s = 300 / e.target.value));

const writeText = () => {
	text.innerHTML = str.slice(0, i);
	i++;
	if (i > str.length) i = 1;
	setTimeout(writeText, s);
};

writeText();
