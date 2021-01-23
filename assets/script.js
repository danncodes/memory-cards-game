// Query Selectors

let container = document.querySelector('.container');

// Array of Colors
let colors = [
	'grey',
	'orange',
	'pink',
	'purple',
	'green',
	'yellow',
	'red',
	'blue'
];

let arrayLength = 16;
let yourMatches = 0;
let matchesForCompletion = arrayLength / 2;

// Duplicate Colors
let allColors = [
	...colors.slice(0, arrayLength / 2),
	...colors.slice(0, arrayLength / 2)
];

console.log(allColors); // Before Shuffle - Remove

// Functions

// Shuffle Array
function shuffleColors(allColors) {
	allColors = allColors.sort((a, b) => 0.5 - Math.random());
	console.log(allColors); // After Shuffle - Remove
	return allColors;
}
shuffleColors(allColors);

// Build Game
function buildGame() {
	container.innerHTML = '';
	allColors.forEach(color => {
		container.innerHTML += `
<div class="flip-card ${color}">
	<div class="flip-card-inner ${color}">
		<div class="flip-card-front ${color}">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back ${color}"></div>
	</div>
</div>`;
	});
}

buildGame();

// Cards Default Value
let cards = { firstCard: null, secondCard: null }; // Cards is a object with null value

function selectCard(e) {
	// Selected Card = Card Clicked

	selectedCard = e.target;

	// First Card
	if (
		selectedCard.className.includes('card') &&
		selectedCard.parentElement.classList != 'container' &&
		cards.firstCard === null
	) {
		selectedCard.parentElement.classList.toggle('flip');
		cards.firstCard = selectedCard;
	}

	// Second Card
	else if (
		selectedCard.className.includes('card') &&
		selectedCard.parentElement.classList != 'container' &&
		cards.secondCard === null
	) {
		selectedCard.parentElement.classList.toggle('flip');

		cards.secondCard = selectedCard;

		// Compare Cards
		comparisonCheck(cards.firstCard, cards.secondCard);

		// Reset Cards Value
		cards.firstCard = null;
		cards.secondCard = null;
		return cards;
	}
}

// Comparison
function comparisonCheck(firstCard, secondCard) {
	if (firstCard.classList[1] === secondCard.classList[1]) {
		firstCard.parentElement.parentElement.classList.add('matched');
		secondCard.parentElement.parentElement.classList.add('matched');
		yourMatches++;
		gameCompletedCheck();
		return;
	} else {
		setTimeout(() => {
			firstCard.parentElement.classList.toggle('flip');
			secondCard.parentElement.classList.toggle('flip');
		}, 800);
	}
}

let allCards = Array.from(container.children);

// Reset Game
function gameCompletedCheck() {
	if (yourMatches === matchesForCompletion) {
		setTimeout(() => {
			allCards.forEach(card => {
				card.classList.remove('matched');
				card.firstChild.nextSibling.classList.toggle('flip');
			});
		}, 3000);

		setTimeout(() => {
			shuffleColors(allColors);
			buildGame();
			yourMatches = 0;
		}, 4000);
	}
}
// Event Listeners
container.addEventListener('click', selectCard);
