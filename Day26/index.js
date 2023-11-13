const wrapper = document.querySelector(".wrapper");
const textWrapper = document.querySelector(".text");
const imgsWrapper = document.querySelector(".imgs");
const prevBtn = document.querySelector(".btns__prev");
const nextBtn = document.querySelector(".btns__next");
const texts = document.querySelectorAll(".text>div");
const imgs = document.querySelectorAll(".imgs__img");

let i = 0;
let t = [...texts];
let im = [...imgs];
const height = wrapper.clientHeight;

prevBtn.addEventListener("click", () => {
	showPrev(t, im);
});

nextBtn.addEventListener("click", () => {
	showNext(t, im);
});

const showNext = (arr1, arr2) => {
	i++;
	if (i === arr1.length) i = 0;
	toggleVisibility(arr1, i);
	toggleVisibility(arr2, i);
};

const showPrev = (arr1, arr2) => {
	i--;
	if (i < 0) i = arr1.length - 1;
	toggleVisibility(arr1, i);
	toggleVisibility(arr2, i);
};

const toggleVisibility = (arr, idx) => {
	arr.forEach((item, i) => {
		item.classList.toggle("hidden", i !== idx);
	});
};
