inputText = document.getElementById('text-input');
textValue = inputText.value;
checkButton = document.getElementById('check-btn');

checkInput = () => {
    if (inputText.value === null || inputText.value === '') {
        alert('Please input a value');
        return;
    }}
const generateWord = (word) => {
    removeSigns = word.replace(/[^a-zA-Z]/g, '');
    lowerCase = removeSigns.toLowerCase();
    return lowerCase;
}
procecedWord = generateWord(textValue);

const isPalindrome = (word) => {
    let reversedWord = word.reverse();
    return word === reversedWord;
}

checkButton.addEventListener('click', () => {
    checkInput();
    if (isPalindrome(procecedWord)) {
        alert('This is a palindrome');
    } else {
        alert('This is not a palindrome');
    }
});