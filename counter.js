let counterR = 0;
let counterL = 0;

const counterValueR = document.querySelector("counter-valueR");
const incrementBtnR = document.querySelector("increment-btnR");
const counterValueL = document.querySelector("counter-valueL");
const incrementBtnL = document.querySelector("increment-btnL");

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