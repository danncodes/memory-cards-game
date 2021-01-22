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

// Duplicate Colors
let allColors = [
	...colors.slice(0, arrayLength / 2),
	...colors.slice(0, arrayLength / 2)
];

console.log(allColors);

// Randomise Array
function shuffleColors(allColors) {
	allColors = allColors.sort((a, b) => 0.5 - Math.random());
	console.log(allColors);
	return allColors;
}
shuffleColors(allColors);

function buildGame() {
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

// Functions

function selectCard(e) {
	// Selected Card = Card Clicked
	let selectedCard = e.target;

	// Flip Card
	if (
		selectedCard.className.includes('card') &&
		selectedCard.parentElement.classList != 'container'
	) {
		selectedCard.parentElement.classList.toggle('flip');
	}
}

// Event Listeners
container.addEventListener('click', selectCard);
