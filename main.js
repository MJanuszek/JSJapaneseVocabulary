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
    if(currentInputValue.toLowerCase() === currentWord.word.toLowerCase()){
        console.log("poprawna odpowiedź");
    } else {
        console.log("niepoprawna odpowiedź");
    }
    valueToCompare.value = "";
}

showBtn.addEventListener("click", showJapaneseWord);
checkBtn.addEventListener("click", checkIfCorrectAnswer);