// Query Selectors

let container = document.querySelector('.container');
let body = document.querySelector('body');

container.innerHTML += `
<div class="flip-card grey">
	<div class="flip-card-inner grey">
		<div class="flip-card-front grey">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back grey"></div>
	</div>
</div>

<div class="flip-card grey">
	<div class="flip-card-inner grey">
		<div class="flip-card-front grey">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back grey"></div>
	</div>
</div>
<div class="flip-card orange">
	<div class="flip-card-inner orange">
		<div class="flip-card-front orange">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back orange"></div>
	</div>
</div>
<div class="flip-card orange">
	<div class="flip-card-inner orange">
		<div class="flip-card-front orange">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back orange"></div>
	</div>
</div>
<div class="flip-card pink">
	<div class="flip-card-inner pink">
		<div class="flip-card-front pink">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back pink"></div>
	</div>
</div>
<div class="flip-card pink">
	<div class="flip-card-inner pink">
		<div class="flip-card-front pink">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back pink"></div>
	</div>
</div>
<div class="flip-card purple">
	<div class="flip-card-inner purple">
		<div class="flip-card-front purple">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back purple"></div>
	</div>
</div>
<div class="flip-card purple">
	<div class="flip-card-inner purple">
		<div class="flip-card-front purple">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back purple"></div>
	</div>
</div>
<div class="flip-card green">
	<div class="flip-card-inner green">
		<div class="flip-card-front green">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back green"></div>
	</div>
</div>
<div class="flip-card green">
	<div class="flip-card-inner green">
		<div class="flip-card-front green">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back green"></div>
	</div>
</div>
<div class="flip-card yellow">
	<div class="flip-card-inner yellow">
		<div class="flip-card-front yellow">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back yellow"></div>
	</div>
</div>
<div class="flip-card yellow">
	<div class="flip-card-inner yellow">
		<div class="flip-card-front yellow">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back yellow"></div>
	</div>
</div>
<div class="flip-card red">
	<div class="flip-card-inner red">
		<div class="flip-card-front red">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back red"></div>
	</div>
</div>
<div class="flip-card red">
	<div class="flip-card-inner red">
		<div class="flip-card-front red">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back red"></div>
	</div>
</div>
<div class="flip-card blue">
	<div class="flip-card-inner blue">
		<div class="flip-card-front blue">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back blue"></div>
	</div>
</div>
<div class="flip-card blue">
	<div class="flip-card-inner blue">
		<div class="flip-card-front blue">
			<h2>Daniel Mensah</h2>
			<i class="fab fa-linkedin"></i>
		</div>
		<div class="flip-card-back blue"></div>
	</div>
</div>
`;

// Functions

function selectCard(e) {
	// Selected Card = Card Clicked
	let selectedCard = e.target;

	// Flip Card
	if (selectedCard.className.includes('card')) {
		selectedCard.parentElement.classList.toggle('flip');
	}
}

// Event Listeners
body.addEventListener('click', selectCard);
