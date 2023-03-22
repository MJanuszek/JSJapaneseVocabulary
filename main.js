const words = [
    {id: 1, word: "momo", meaningPL: "brzoskwinia", meaningANG: "peach"},
    {id: 2, word: "akai", meaningPL: "czerwony", meaningANG: "red"},
    {id: 3, word: "aoi", meaningPL: "niebieski", meaningANG: "blue"},
    {id: 4, word: "midori", meaningPL: "zielony", meaningANG: "green"},
    {id: 5, word: "enpitsu", meaningPL: "ołówek", meaningANG: "pencil"},
]

const showBtn = document.querySelector(".show-btn");
const checkBtn = document.querySelector(".checkCorrect");
const wordDisplay = document.querySelector(".word-display");



const showJapaneseWord = () => {
  
    let currentWord = words[Math.floor(Math.random()*words.length)];
    console.log(currentWord.word);
    wordDisplay.textContent = currentWord.word
}

showBtn.addEventListener("click", showJapaneseWord);