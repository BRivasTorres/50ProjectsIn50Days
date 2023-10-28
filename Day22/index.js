const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
const btnClear = document.querySelector(".clear");
const count = document.querySelector(".count");
const canvas = document.querySelector(".canvas");
const colorEl = document.querySelector(".color");
const ctx = canvas.getContext("2d");

let currCount = parseInt(count.innerHTML, 10);
let isPresed = false;
let color = colorEl.value;
let y;
let x;

canvas.addEventListener("mousedown", (e) => {
	isPresed = true;

	x = e.offsetX;
	y = e.offsetY;
});

document.addEventListener("mouseup", () => {
	isPresed = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
	if (isPresed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

const drawCircle = (x, y) => {
	ctx.beginPath();
	ctx.arc(x, y, currCount, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = currCount * 2;
	ctx.stroke();
};

btnPlus.addEventListener("click", () => updateCount("plus"));
btnMinus.addEventListener("click", () => updateCount("minus"));

const updateCount = (btn) => {
	if (btn === "plus") {
		currCount < 50 ? (currCount += 5) : currCount;
	} else if (btn === "minus") {
		currCount > 5 ? (currCount -= 5) : currCount;
	}
	count.innerHTML = currCount;
};

colorEl.addEventListener("change", (e) => (color = e.target.value));
btnClear.addEventListener("click", () =>
	ctx.clearRect(0, 0, canvas.width, canvas.height)
);
