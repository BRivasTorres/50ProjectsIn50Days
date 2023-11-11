const prevBtn = document.querySelector(".btns__prev");
const nextBtn = document.querySelector(".btns__next");
const texts = document.querySelectorAll(".text>div");
const imgs = document.querySelectorAll(".imgs__img");

let i = 1;
let t = [...texts];
let im = [...imgs];

prevBtn.addEventListener("click", () => {
	if (i === 0) i = t.length;
	if (i !== 0) {
		t[i - 1].classList.add("hidden");
		im[i - 1].classList.add("hidden");
	}
	t[i].classList.remove("hidden");
	im[i].classList.remove("hidden");
	i--;
});

nextBtn.addEventListener("click", () => {
	if (i >= 1) {
		t[i - 1].classList.add("hidden");
		im[i - 1].classList.add("hidden");
	}
	if (i === t.length) i = 0;
	t[i].classList.remove("hidden");
	im[i].classList.remove("hidden");
	i++;
});
