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

container.innerHTML += `
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>

<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-bac"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back "></div>
	</div>
</div>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back"></div>
	</div>
</div>
`;

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
