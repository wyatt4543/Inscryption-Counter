let counterR = 0;
let counterL = 0;

const counterValueR = document.getElementById('counter-valueR');
const incrementBtnR = document.getElementById('increment-btnR');
const counterValueL = document.getElementById('counter-valueL');
const incrementBtnL = document.getElementById('increment-btnL');

// To increment the value of counter
incrementBtnR.addEventListener('click', () => {
	counterR++;
	counterValueR.innerHTML = counterR;
	counterL--;
	counterValueL.innerHTML = counterL;
});

// To increment the value of counter
incrementBtnL.addEventListener('click', () => {
	counterL++;
	counterValueL.innerHTML = counterL;
	counterR--;
	counterValueR.innerHTML = counterR;
});