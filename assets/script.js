// Query Selectors

let container = document.querySelector('.container');
let select = document.querySelector('select');
let moves = document.querySelector('.moves-span');

let restartBtn = document.querySelector('.fa-sync');

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

let arrayLength = select.value;
let yourMatches = 0;
let matchesForCompletion = arrayLength / 2;

// Duplicate Colors
let allColors = [
	...colors.slice(0, arrayLength / 2),
	...colors.slice(0, arrayLength / 2)
];

// Functions

// Shuffle Array
function shuffleColors(allColors) {
	allColors = allColors.sort((a, b) => 0.5 - Math.random());
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
			<h2 class ='name'>Daniel Mensah</h2>
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
	selectedCard = e.target;

	// First Card
	if (
		selectedCard.className.includes('card') &&
		selectedCard.parentElement.classList != 'container' &&
		cards.firstCard === null
	) {
		selectedCard.parentElement.classList.toggle('flip');
		cards.firstCard = selectedCard;

		// Ensures the same Card Cannot be picked Twice
	} else if (
		(cards.firstCard != null && e.target === cards.firstCard.parentElement) ||
		(cards.firstCard != null && e.target === cards.firstCard)
	) {
		return;
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

		// Moves Counter
		moves.innerText++;

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

function reset() {
	setTimeout(() => {
		allCards.forEach(card => {
			card.classList.remove('matched');
			card.firstChild.nextSibling.classList.toggle('flip');
		});
	}, 1000);

	setTimeout(() => {
		shuffleColors(allColors);
		buildGame();
		yourMatches = 0;
		moves.innerText = 0;
	}, 2000);
}

function gameCompletedCheck() {
	if (yourMatches === matchesForCompletion) {
		reset();
	}
}

// Event Listeners
container.addEventListener('click', selectCard);

// On Select Option Change
select.addEventListener('change', e => {
	allCards = Array.from(container.children);

	cards.firstCard = null;
	cards.secondCard = null;
	arrayLength = select.value;
	allColors = [
		...colors.slice(0, arrayLength / 2),
		...colors.slice(0, arrayLength / 2)
	];

	matchesForCompletion = arrayLength / 2;
	yourMatches = 0;
	moves.innerText = 0;

	// Replicate Reset Function without the Timeout

	allCards.forEach(card => {
		if (card.className.includes('matched')) {
			card.classList.remove('matched');
			console.log('card.firstChild.nextSibling');
			card.firstChild.nextSibling.classList.toggle('flip');
		}

		shuffleColors(allColors);
		buildGame();
	});
});

restartBtn.addEventListener('click', () => {
	allCards.forEach(card => {
		card.classList.remove('matched');
		card.firstChild.nextSibling.classList.toggle('flip');
	});

	shuffleColors(allColors);
	buildGame();
	yourMatches = 0;
	moves.innerText = 0;
});
