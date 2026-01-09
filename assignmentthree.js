let mixedDataTypes = [1, 2, true, false, "Js", null];
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let lastElement = itCompanies.pop();
let result = itCompanies.join(", ");
console.log(result);
let arrayWithoutLastElement = itCompanies;
console.log(arrayWithoutLastElement);
arrayWithoutLastElement + "and"
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

console.log(sentence);

let companyToCheck = 'Google';

if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log('Company is not found');
}

for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    console.log(company);
  }
}

itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);

let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

let lastthreeCompanies = itCompanies.slice(-3);
console.log(lastthreeCompanies);

let middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]);
