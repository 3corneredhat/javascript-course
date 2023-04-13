// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
console.log("Challenge #1");
let markBMI, johnBMI, boo;

console.log("Data set 1");
markBMI = bmi_calc(78, 1.69);
johnBMI = bmi_calc(92, 1.95);
boo = isMarkHigher(markBMI, johnBMI);
message(boo);

console.log("Data set 2");
markBMI = bmi_calc(95, 1.88);
johnBMI = bmi_calc(85, 1.76);
boo = isMarkHigher(markBMI, johnBMI);
message(boo);

function bmi_calc(mass, height) {
  return Math.round((mass / height ** 2) * 10) / 10;
}

function isMarkHigher(mark, john) {
  return mark < john;
}

function message(boo) {
  if (boo) {
    console.log("Mark's BMI is higher");
  } else {
    console.log("Mark's BMI is lower");
  }
}

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
console.log("\nChallenge #2");

message2(boo, markBMI, johnBMI);
function message2(boo, markBMI, johnBMI) {
  if (boo) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
  } else {
    console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})`);
  }
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
console.log("\nChallenge #3");

const dolphin = [
  [96, 108, 89],
  [97, 112, 101],
  [97, 112, 101],
];

const koala = [
  [88, 91, 110],
  [109, 95, 123],
  [109, 95, 106],
];

let dolphinAvg = [
  calcAvg(dolphin[0]),
  calcAvg(dolphin[1]),
  calcAvg(dolphin[2]),
];

let koalaAvg = [calcAvg(koala[0]), calcAvg(koala[1]), calcAvg(koala[2])];

for (let i = 0; i < dolphin.length; i++) {
  console.log(`Data set ${i + 1}`);
  isWinner(dolphinAvg[i], koalaAvg[i]);
}

function calcAvg(scores) {
  let sum = 0;

  //'of' returns the element
  for (score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function isWinner(dolphinScore, koalaScore) {
  if (dolphinScore >= 100 && koalaScore >= 100) {
    if (dolphinScore === koalaScore) {
      console.log("There is a draw. Both teams win!");
    } else if (dolphinScore > koalaScore) {
      console.log("Dolphins win!");
    } else {
      console.log("Koalas win!");
    }
  } else if (dolphinScore >= 100) {
    console.log("Dolphins win by default");
  } else if (koalaScore >= 100) {
    console.log("Koalas win by default");
  } else {
    console.log("Neither teams made the minimum score.");
  }
}
