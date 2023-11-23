let counterR = 0;
let counterL = 0;

const counterValueR = document.querySelector("#counter-valueR");
const incrementBtnR = document.querySelector("#increment-btnR");
const counterValueL = document.querySelector("#counter-valueL");
const counterValueT1A = document.querySelector("#counter-valueT1A");
const incrementBtnL = document.querySelector("#increment-btnL");

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

// To increment the value of multiple counters
function increment(button) {
    counterValueT1A.innerHTML = button.id;
}

// To decrement the value of multiple counters
function decrement(button) {
    counterValueT1A.innerHTML = button.id;
}