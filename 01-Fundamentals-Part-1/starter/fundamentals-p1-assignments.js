// JavaScript Fundamentals – Part 1

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = "US";
let continent = "North America";
let population = 300000000;

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = "English";
// country = "AR";

// by printing a const variable after reassigning a value to it, we will see
// an error being thrown that tells us the action is illegal.
console.log(country);

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese

let halfPopulation = population / 2;
console.log(
  `Half of the current population is ${halfPopulation.toLocaleString()}`
);
++population;
console.log(population.toLocaleString());

const finlandPop = 6000000;
if (population < finlandPop) {
  console.log(`The user country has a smaller population than Finland`);
} else {
  console.log(`The user country has a greater population than Finland`);
}

const avgPopulation = 33000000;
if (population < avgPopulation) {
  console.log(
    `The user country has a smaller population than the average country`
  );
} else {
  console.log(
    `The user country has a greater population than the average country`
  );
}

let description = `${country} is in ${continent}, and its ${population.toLocaleString()} people speak ${language}`;

console.log(description);

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

// already done above

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// population = 13;
// population = 130;
if (population < avgPopulation) {
  console.log(
    `The ${country}'s population is ${(
      33000000 - population
    ).toLocaleString()} below average`
  );
} else {
  console.log(`The ${country}'s population is above average`);
}
