const words = [
    {id: 1, word: "momo", meaningPL: "brzoskwinia", meaningANG: "peach", category: "noun"},
    {id: 2, word: "akai", meaningPL: "czerwony", meaningANG: "red", category: "adjective"},
    {id: 3, word: "aoi", meaningPL: "niebieski", meaningANG: "blue", category: "adjective"},
    {id: 4, word: "midori", meaningPL: "zielony", meaningANG: "green", category: "adjective"},
    {id: 5, word: "enpitsu", meaningPL: "ołówek", meaningANG: "pencil", category: "noun"},
    {id: 6, word: "iku", meaningPL: "iść", meaningANG: "to go", category: "verb"},
]

const showBtn = document.querySelector(".show-btn");
const checkBtn = document.querySelector(".checkCorrect");
const wordDisplay = document.querySelector(".word-display");
const category = document.getElementById("category");
let valueToCompare = document.getElementById("valueToCompare");
const addBtn = document.querySelector(".add");
const japInput = document.getElementById("jap-word");
const plInput = document.getElementById("pl-word");
const angInput = document.getElementById("ang-word");
const wordCategory = document.getElementById("form-category");
// ---------------------
let currentInputValue = '';
let currentWord = '';
let filteredWords; 
let filtered;


const showJapaneseWord = () => {
    
    filteredWords = words.filter((item) => (item.category === category.value));
    // filtered = words.filter((item) => item.category === "rzeczownik");
    
    // 
    currentWord = filteredWords[Math.floor(Math.random()*filteredWords.length)];
    console.log(currentWord.word);
    wordDisplay.textContent = currentWord.word
}

// get value form input to compare if correct:
valueToCompare.addEventListener("change", (e)=> {
    currentInputValue = e.target.value;
    
})
// compare input.value with drawn word:
const checkIfCorrectAnswer = () => {
    if(currentInputValue.toLowerCase() === currentWord.meaningPL.toLowerCase()){
        console.log("poprawna odpowiedź");
    } else {
        console.log("niepoprawna odpowiedź");
    }
    valueToCompare.value = "";
}

const createNewWord = (e) => {
    e.preventDefault();
    // let japWord = {id, word: "", meaningPL: "", meaningANG: "", category: ""};
    let japWord = {};
    japWord.id = words.length+1;
    japWord.word = japInput.value;
    japWord.meaningPL = plInput.value;
    japWord.meaningANG = angInput.value;
    japWord.category = wordCategory.value;
    console.log(japWord);
    words.push(japWord);

}

showBtn.addEventListener("click", showJapaneseWord);
checkBtn.addEventListener("click", checkIfCorrectAnswer);
addBtn.addEventListener("click", createNewWord)