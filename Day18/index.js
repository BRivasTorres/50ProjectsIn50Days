let data = [
	{
		url: "https://images.unsplash.com/photo-1693761935441-ad0ffad6905b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		url: "https://images.unsplash.com/photo-1693928803328-48ca657b4caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		url: "https://images.unsplash.com/photo-1693377367690-347f1d381985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		url: "https://images.unsplash.com/photo-1690876923836-9ecf213ebe93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		url: "https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	},
];
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let currentPrev = data.length - 1;
let currentNext = 0;

prevBtn.addEventListener("click", () => {
	currentPrev < 1 ? (currentPrev = data.length - 1) : currentPrev--;
	document.body.style.backgroundImage = `url(${data[currentPrev].url})`;
	console.log(currentPrev);
});

nextBtn.addEventListener("click", () => {
	currentNext >= data.length - 1 ? (currentNext = 0) : currentNext++;
	document.body.style.backgroundImage = `url(${data[currentNext].url})`;
	console.log(currentNext, data.length);
});
