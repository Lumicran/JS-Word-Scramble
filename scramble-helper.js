// Declare variable greeting and assign it to a phrase.
let greeting = "Hi lets play scramble words.";


// Split a string into an array of characters.
function splitString(string) {
  const strArray = string.split(" ");

  return strArray;
}

// Join an array of strings together.
function arrayToString(array) {
  const word = array.join();

  return word;
}

// Select random item from an array.
function randomFromArray(array) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const index = getRandomInt(array.length);
  return array[index];
}

// Select two random items from an array and swap them.
function swapElements(array) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const index1 = getRandomInt(array.length);
  const index2 = getRandomInt(array.length);  

  while (index1 === index2) {
    const index2 = getRandomInt(array.length);
  }

  let ele1 = array[index1];

  array[index1] = array[index2];
  array[index2] = ele1;

  return array;
}

// Create variable candy and empty map.
let candy = new Map();

// Set 5 colors as keys and 5 flavors as values.
candy.set('red', 'strawberry');
candy.set('yellow', 'lemon');
candy.set('green', 'apple');
candy.set('white', 'vanilla');
candy.set('blue', 'blueberry');

// Iterate over candy flavors to print color and flavor.
function printCandy(candies) {
  for (candy of candies) {
    console.log(`The ${candy[1]} flavor is ${candy[0]}.`);
  }
}

// Get value of a color from candy map, when the color does not exist.
let value = candy.get('purple');
// console.log(value);



// Function that takes color and candy map, returns flavor.
function returnFlavor(color, candyMap) {
  if (candyMap.has(color)) {
    return candyMap.get(color);
  } else {
    console.log("Sorry, that color doesn't have a flavor.");
  }
}

// Function that takes an array of colors and returns flavors.
function getFlavors(array, candyMap) {
  function flavor(color){
    if (candyMap.has(color)) {
      return candyMap.get(color);
    } else {
      return null;
    }
  }

  let arrayFlavor = array.map(flavor);

  return arrayFlavor;
} 
// console.log(getFlavors(['blue', 'red', 'orange'], candy));

// Create a function that reverses a word
function reverseWord(word) {
  let letters = word.split('');
  let reversed = letters.reverse();

  return reversed.join("");
}


// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.
function reverseArray(array) {
  return array.map(reverseWord);
}
// console.log(reverseArray(['cat', 'dog', 'giraffe']));


// Create a function that returns a random word from an array
randomWord = randomFromArray(array);


// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
