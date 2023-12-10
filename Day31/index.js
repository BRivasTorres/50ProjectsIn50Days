const generateBtn = document.querySelector(".main__btn")
const copyBtn = document.querySelector(".main__button--copy")
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

generateBtn.addEventListener("click", () => { 
    let passwordLength = inputLength.value;
    inputLength.addEventListener("click", (e) => {
        passwordLength = e.target.value;
    });
    
    res = "";
    if (inputLowercase.checked) chars.push(...lowercaseLetters);
    if (inputUppercase.checked) chars.push(...uppercaseLetters);
    if (inputSymbols.checked) chars.push(...symbols);
    if (inputNumbers.checked) chars.push(...numbers);
    generatePassword(chars, passwordLength);
    printPassword(res)
});

const generatePassword = (arr, length) => {
    if(arr.length === 0) return
    for(let i = 0; i < length; i++) {
        let j = Math.floor(Math.random() * arr.length)
        res += arr[j]
    }
    chars = [];
}

const printPassword = (pass) => {
    if(span.innerHTML.length > 0) {
        span.innerHTML = ""
    }    
    span.innerHTML = `${pass}`;
}

const copyPassword = () => {
    if(!res) return
    let pass = span.innerText
    navigator.clipboard.writeText(pass)
        .then(() => alert("Password copied to clipboard "))
        .catch(err => alert("Error " + err))   
}

copyBtn.addEventListener("click", copyPassword);