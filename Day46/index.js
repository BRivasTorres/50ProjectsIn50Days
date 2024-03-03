const main = document.querySelector(".main")
let currentForm = 0

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
	
	for(let i = 0; i < questions.length; i++) {
		const form = document.createElement("form")
		form.classList.add("main__form")
		form.innerHTML = `
			<section class="form__content">
				<h2 class="content__tittle">${questions[i].question}</h2>
				<div class="content__options"></div>
			</section>
			<button type="submit" class="form__submit">Submit</button>
		`;
		const optionscontainer = form.querySelector(".content__options")
		printOptionsForm(questions[i].options, optionscontainer)
		main.appendChild(form)
	}
	
	function printOptionsForm (options, container) {
		options.forEach((option, index) => {
			const aside = document.createElement("aside")
			const label = document.createElement("label")
			label.classList.add("options__label");
			label.setAttribute("for", `option${index}`);
			label.innerHTML = option
			
			const input = document.createElement("input")
			input.classList.add("options__input")
			input.setAttribute("name", `options`);
			input.setAttribute("id", `option${index}`);
			input.setAttribute("type", "radio");
			input.setAttribute("require", "true")
			
			aside.appendChild(input)
			aside.appendChild(label)
			container.appendChild(aside)
		})
	}
}
printForm();

const forms = document.querySelectorAll(".main__form")

forms.forEach((form) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault()
		currentForm++;
		updateCurrentForm();
	})
})

function updateCurrentForm() {
	forms.forEach((form, idx) => {
		if(idx === currentForm) {
			form.classList.remove("hide-form")
		} else {
			form.classList.add("hide-form")
		}
	}) 
}

