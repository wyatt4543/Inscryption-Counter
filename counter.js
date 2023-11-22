let counterR = 0;

const counterValueR = document.getElementById('counter-valueR');
const incrementBtnR = document.getElementById('increment-btnR');
const decrementBtnR = document.getElementById('decrement-btnR');

// To increment the value of counter
incrementBtnR.addEventListener('click', () => {
	counteRr++;
	counterValueR.innerHTML = counter;
});

// To decrement the value of counter
decrementBtnR.addEventListener('click', () => {
	counterR--;
	counterValueR.innerHTML = counter;
});