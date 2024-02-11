const inputs = document.querySelectorAll(".numbers__input")

inputs[0].focus();

inputs.forEach((input, idx) => {
	input.addEventListener("keydown", (e) => {
		if (e.key >= 0 && e.key <= 9) {
			inputs[idx].value = "";
			setTimeout(() => inputs[idx + 1].focus(), 10);
		} else if (e.key === "Backspace") {
			setTimeout(() => inputs[idx - 1].focus(), 10);
		}
	});
});