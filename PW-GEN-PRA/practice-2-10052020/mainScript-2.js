// Retrieve the DOM elements
const passwordDisplayEL = document.getElementById("passwordDisplay");
const formEl = document.getElementById("passwordGeneratorForm");
const characterAmountRangeEl = document.getElementById("characterAmountRange");
const characterAmountNumberEl = document.getElementById("characterAmountNumber");
const includeUppercaseEl = document.getElementById("includeUppercase");
const includeNumbersEl = document.getElementById("includeNumbers");
const includeSymbolsEl = document.getElementById("includeSymbols");

// Sync range and counter field
characterAmountRangeEl.addEventListener("input", syncRangeAndCounter);
characterAmountNumberEl.addEventListener("input", syncRangeAndCounter);
function syncRangeAndCounter(e) {
  const syncRangeAndCounterValue = e.target.value;
  characterAmountRangeEl.value = syncRangeAndCounterValue;
  characterAmountNumberEl.value = syncRangeAndCounterValue;
}

// Create a function to loop the ASCII character lists
function asciiBeginAndEnd(begin, end) {
  let asciiLoop = [];
  for(i=begin; i<=end; i++){
  asciiLoop.push(i);
  }
  //console.log(asciiLoop)
  return asciiLoop;
}
//asciiBeginAndEnd(65, 90);

// Process the ASCII characters
const upperAscii = asciiBeginAndEnd(65, 90);
const lowerAscii = asciiBeginAndEnd(97, 122);
const numbersAscii = asciiBeginAndEnd(48, 57);
const symbolsAscii = asciiBeginAndEnd(33, 47).concat(asciiBeginAndEnd(58, 64)).concat(asciiBeginAndEnd(91, 96)).concat(asciiBeginAndEnd(123, 126));

// UC: 65-90, LC: 97-122, Num: 48-57, (Sym: 33-47, 58-64, 91-96, 123-126)