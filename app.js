// import functions
import { add, subtract } from './calculations.js';


// reference needed DOM elements
// Addition DOM elements
const addXInput = document.getElementById('add-x-input');
const addYInput = document.getElementById('add-y-input');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

// Subtraction DOM elements
const subtractXInput = document.getElementById('subtract-x-input');
const subtractYInput = document.getElementById('subtract-y-input');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

// set event listeners 
addButton.addEventListener('click', () => {
  // do any needed work with the value(s)
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);
    const sum = add(x, y);

    // update DOM to reflect new value(s)
    addResult.textContent = sum;
});

subtractButton.addEventListener('click', () => {
    const x = Number(subtractXInput.value);
    const y = Number(subtractYInput.value);
    const answer = subtract(x, y);

    subtractResult.textContent = answer;

});
  // get user input(s)
