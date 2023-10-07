// Select relevant HTML elements
const textInputEl = document.querySelector('.textarea');
const wordsCountEl = document.querySelector('.words');
const charactersCountEl = document.querySelector('.characters');
const twitterRemainChEl = document.querySelector('.twitter');
const facebookRemainChEl = document.querySelector('.facebook');

// Function to count characters in the textarea and update the display
function countCharacters() {
	let numberOfCharacters = 0;
	charactersCountEl.textContent = numberOfCharacters; // Reset character count
	numberOfCharacters = Number(textInputEl.value.length);
	charactersCountEl.textContent = numberOfCharacters;
}

// Function to count words in the textarea and update the display
function countWords() {
	let numberOfWords = 0;
	wordsCountEl.textContent = numberOfWords; // Reset word count
	numberOfWords = textInputEl.value.trim().split(' ').length;
	if (textInputEl.value) {
		wordsCountEl.textContent = numberOfWords;
	}
}

// Function to calculate remaining characters for Twitter and update the display
function remainCharactersTwitter() {
	twitterRemainChEl.textContent = 0; // Reset Twitter character count
	twitterRemainChEl.textContent = 288 - Number(textInputEl.value.length);
	// add visual indicator if limit is exceeded
	if (twitterRemainChEl.textContent < 0) {
		twitterRemainChEl.classList.add('number--limit');
	} else {
		twitterRemainChEl.classList.remove('number--limit');
	}
}

// Function to calculate remaining characters for Facebook and update the display
function remainCharactersFacebook() {
	facebookRemainChEl.textContent = 0; // Reset Facebook character count
	facebookRemainChEl.textContent = 2200 - Number(textInputEl.value.length);
	// add visual indicator if limit is exceeded
	if (facebookRemainChEl.textContent < 0) {
		facebookRemainChEl.classList.add('number--limit');
	} else {
		facebookRemainChEl.classList.remove('number--limit');
	}
}

// Function to update all analytics when input changes
function updateAnalytics() {
	countCharacters();
	countWords();
	remainCharactersTwitter();
	remainCharactersFacebook();
}

// Clear the textarea when the page is loaded
window.addEventListener('load', function () {
	textInputEl.value = '';
});

// Add an event listener to the textarea for input changes
textInputEl.addEventListener('input', updateAnalytics);
