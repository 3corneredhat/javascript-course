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
