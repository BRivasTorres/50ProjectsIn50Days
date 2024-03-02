const main = document.querySelector(".main")
function printForm() {
	const questions = [
		{
			question: "Which language runs in a web browser?",
			options: ["Java", "C", "Phyton", "JavaScript"],
		},
		{
			question: "What does CSS stand for?",
			options: [
				"Central Style Sheets",
				"Cascading Style Sheets",
				"Cascading Simple Sheets",
				"Cars SUVs Sailboats",
			],
		},
		{
			question: "What does HTML stand for?",
			options: [
				"Hypertext Markup Language",
				"Hypertext Markdown Language",
				"Hyperloop Machine Language",
				" Helicopters Terminals Motorboats Lamborginis",
			],
		},
		{
			question: "What year was JavaScript launched?",
			options: [1996, 1994, 1996, "none of the above"],
		},
	];
	
	for(let i = 0; i < 1; i++) {
		const form = document.createElement("form")
		form.classList.add("main__form")
		form.innerHTML = `
			<section>
				<h2 class="form__title">${questions[i].question}</h2>
				<div class="form__options">
					${printOptionsForm(questions[i].options.length, i)}
				</div>
			</section>
			<button type="submit" class="form__submit">Submit</button>
		`;
		main.appendChild(form)
	}
	
	function printOptionsForm (length, currentEl) {
		const optionsWrapper = document.createElement("div")
		for(let i = 0; i <= length; i++) {
			const currentOption = questions[currentEl].options[i]
			optionsWrapper.innerHTML += `<label for="options${i}">${currentOption}</label>`
			optionsWrapper.innerHTML += `<input type="radio" name="options${i}" id="options${i}" />`;
			return optionsWrapper
		}
	}
}
printForm();
