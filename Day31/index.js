const generateBtn = document.querySelector(".main__btn")
const inputLength = document.querySelector("#length")
const inputUppercase = document.querySelector("#uppercase")
const inputLowercase = document.querySelector("#lowercase")
const inputNumbers = document.querySelector("#numbers")
const inputSymbols = document.querySelector("#symbols")
const span = document.querySelector(".main__span")

const lowercaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
const uppercaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const numbers = Array.from({ length: 10 }, (_, i) => i.toString());
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?'];

let res = ""
let chars = [];    
let passwordLength = inputLength.value

const handleLength = () => {
    inputLength.addEventListener("click", (e) => {
		passwordLength = e.target.value;
	});
}

generateBtn.addEventListener("click", () => {
    res = "";
    if (inputLowercase.checked) chars.push(...lowercaseLetters);
    if (inputUppercase.checked) chars.push(...uppercaseLetters);
    if (inputSymbols.checked) chars.push(...symbols);
    if (inputNumbers.checked) chars.push(...numbers);
    handleLength()
    generatePassword(chars, passwordLength);
});

const generatePassword = (arr, length) => {
    for(let i = 0; i < length; i++) {
        let j = Math.floor(Math.random() * arr.length)
        res += arr[j]
    }
    chars = [];
    console.log(length)
}

