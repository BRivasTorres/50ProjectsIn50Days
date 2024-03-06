const main = document.querySelector(".main")
const questions = [
	{
		question: "Which language runs in a web browser?",
		options: ["Java", "C", "Phyton", "JavaScript"],
		answer: "JavaScript",
	},
	{
		question: "What does CSS stand for?",
		options: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		anwser: "Cascading Style Sheets",
	},
	{
		question: "What does HTML stand for?",
		options: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			" Helicopters Terminals Motorboats Lamborginis",
		],
		answer: "Hypertext Markdown Language",
	},
	{
		question: "What year was JavaScript launched?",
		options: [1996, 1994, 1996, "none of the above"],
		answer: 1995
	},
];
let currentForm = 0;
let correctAnswers = 0

function printForm() {
	// if(currentForm === 3) {
	// 	console.log("cal this")
	// }
	questions.forEach((question) => {
		const form = createForm(question)
		main.appendChild(form)
	})
}

function createForm(questionObj) {
	const form = document.createElement("form");
	form.classList.add("main__form");
	form.innerHTML = `
        <section class="form__content">
            <h2 class="content__tittle">${questionObj.question}</h2>
            <div class="content__options"></div>
        </section>
        <button type="submit" class="form__submit">Submit</button>
    `;

	const optionsContainer = form.querySelector(".content__options");
	printOptionsForm(questionObj.options, optionsContainer);

	return form;
}

function printOptionsForm(options, container) {
	options.forEach((option, index) => {
		const aside = document.createElement("aside");
		const label = document.createElement("label");
		label.classList.add("options__label");
		label.setAttribute("for", `option${index}`);
		label.innerHTML = option;

		const input = document.createElement("input");
		input.classList.add("options__input");
		input.setAttribute("name", "options");
		input.setAttribute("id", `option${index}`);
		input.setAttribute("type", "radio");
		input.setAttribute("required", "true");
		input.setAttribute("value", option);

		aside.appendChild(input);
		aside.appendChild(label);
		container.appendChild(aside);
	});
}
printForm();

const forms = document.querySelectorAll(".main__form");
forms.forEach((form, idx) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault()		
		updateCurrentForm()
		updataCountAnswers(idx);
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

function printSumary() {
	const summary = document.createElement("h3")
	summary.classList.add(".form__summary--h3")
	summary.innerHTML = `You answered ${correctAnswers}/4 questions correctly`;
	
	const buttonReload = document.createElement("button")
	buttonReload.classList.add(".form__submit reload")
	buttonReload.innerHTML = "Reload"
	
	buttonReload.addEventListener("click", () => {
		window.location.reload();
	});
}

function updataCountAnswers(idxForm) {
	const optionsInputs = document.querySelectorAll(".options__input")
	optionsInputs.forEach((input) => {
		if(input.checked) {
			const valueSelect = input.value
			if(valueSelect === questions[idxForm].answer) {
				correctAnswers++
			} 
		}
	})
}