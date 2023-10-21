const img = document.querySelector(".img");
const boxes = document.querySelectorAll(".boxes");

img.addEventListener("dragstart", dragStart);
img.addEventListener("dragend", dragEnd);

for (const box of boxes) {
	box.addEventListener("dragover", dragOver);
	box.addEventListener("dragenter", dragEnter);
	box.addEventListener("dragleave", dragLeave);
	box.addEventListener("drop", dragDrop);
}

function dragStart() {
	this.className += " hold";
	setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
	this.className = "img";
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
	this.className += " hovered";
}

function dragLeave() {
	this.className = "boxes";
}

function dragDrop() {
	this.className = "boxes";
	this.append(img);
}
