const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
let textValue = inputText.value;
const checkInput = () => {
    textValue = inputText.value;
    if (textValue === null || textValue === '') {
        alert('Please input a value');
        return;
    } else {
        let procecedWord = generateWord(textValue);
        renderResult(isPalindrome(procecedWord));
    }
}

const generateWord = (word) => {
    const removeSigns = word.replace(/[^a-zA-Z0-9]/g, '');
    const lowerCase = removeSigns.toLowerCase();
    console.log(lowerCase);
    return lowerCase;
}

const isPalindrome = (word) => {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

checkButton.addEventListener('click', checkInput);

const renderResult = (result) => {
    let resultP = document.getElementById('result');
    if (result) {
        resultP.innerHTML = `${textValue} is a palindrome`;
    } else { 
        resultP.innerHTML = `${textValue} is not a palindrome`;
    }
}