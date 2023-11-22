let counterR = 0;
let counterL = 0;

const counterValueR = document.getElementById('counter-valueR');
const incrementBtnR = document.getElementById('increment-btnR');
const decrementBtnR = document.getElementById('decrement-btnR');
const counterValueL = document.getElementById('counter-valueL');
const incrementBtnL = document.getElementById('increment-btnL');
const decrementBtnL = document.getElementById('decrement-btnL');

// To increment the value of counter
incrementBtnR.addEventListener('click', () => {
	counterR++;
	counterValueR.innerHTML = counterR;
	counterL--;
	counterValueL.innerHTML = counterL;
});

// To decrement the value of counter
decrementBtnR.addEventListener('click', () => {
	counterR--;
	counterValueR.innerHTML = counterR;
	counterL++;
	counterValueL.innerHTML = counterL;
});

// To increment the value of counter
incrementBtnL.addEventListener('click', () => {
	counterL++;
	counterValueL.innerHTML = counterL;
	counterR--;
	counterValueR.innerHTML = counterR;
});

// To decrement the value of counter
decrementBtnL.addEventListener('click', () => {
	counterL--;
	counterValueL.innerHTML = counterL;
	counterR++;
	counterValueR.innerHTML = counterR;
});