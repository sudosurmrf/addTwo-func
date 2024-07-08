//takes in an array of nums and loop through the array to return a new array with all values 2 higher.
let numbers = [1,3,6,74];
let twoNumbers = [];
const addTwo = (numbers) => {
  for (let i=0; i <numbers.length; i++) {
    twoNumbers.push(numbers[i]+2);
  }
  return twoNumbers;
}

console.log(addTwo(numbers));