function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [firstValue, , secondValue] = arr;
  return { name, age, firstValue, secondValue };
}
const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];
const output = destructureExample(obj, arr);
console.log(output);


function sumNumbers(...numbers){
  return numbers.reduce((s,n)=>s+n)
}
const sum = sumNumbers(1,2,3,4,5)
console.log(sum);


function createGreeting(name) {
	return `Hello, ${name}! Welcome to our website.`;
}
const name = "Alice";
const greeting = createGreeting(name);
console.log(greeting);


function isEven(number) {
  return number % 2 === 0 ? "Odd" : "Even";
}
const isNumber = isEven(7);
console.log(isNumber);


// function multiply(a, b) {
//   return a * b;
// }
const multiply = (a, b) => a * b;
const resultMultiply = multiply(2, 3);
console.log(resultMultiply);


function getLargestNumber(a, b) {
  return a && b ? (a > b ? a : b) : a || b;
}
const getNumber = getLargestNumber(5, 10);
console.log(getNumber);


function getAddressCity(address) {
  return address?.city ?? "Unknown";
}
const addressOne = { street: "123 Main St", city: "New York", country: "USA" };
console.log(getAddressCity(addressOne));
const addressTwo = { street: "123 Main St", country: "Bangladesh" };
console.log(getAddressCity(addressTwo));


function doubleNumbers(dnumbers) {
  return dnumbers.map(number => number * 2);
}
const dnumbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(dnumbers);
console.log(doubledNumbers);


function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);


function sumArray(allnumbers) {
  return allnumbers.reduce((sum, number) => sum + number);
}
const allnumbers = [1, 2, 3, 4, 5];
const totalsum = sumArray(allnumbers);
console.log(totalsum);


function sortNumbers(snumbers) {
  return snumbers.sort((a, b) => a - b);
}
const snumbers = [5, 2, 8, 1, 4];
const sortedNumbers = sortNumbers(snumbers);
console.log(sortedNumbers);
