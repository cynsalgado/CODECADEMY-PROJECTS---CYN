var input = 'Whimsical Whiskers';

var vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

var input = prompt('Enter a phrase to translate into whale talk.');

for (var i = 0; i < input.length; i++) {
  if(input[i] === 'e' || input[i] === 'u'){
     resultArray.push(input[i]);
     }
  for (var j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray.join('').toUpperCase());
