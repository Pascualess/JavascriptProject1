let costArray = [
  { numberCost: 50, typeCost: `bill` },
  { numberCost: 50, typeCost: `bill` },
  { numberCost: 50, typeCost: `bill` },
];

let firstForm = document.querySelector(`#formContainer`);
let cost = totalSumOfNumberCost(costArray);
// let remainingIncome = income - cost;
let expensesForm = document.querySelector(`#formContainer1`);

//This is posting the remaining income after submit
firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(firstForm);

  let income = data.get("income");

  let remainingIncome = +income - +cost;

  let testDiv = document.querySelector("#test");

  let pastElement = document.createElement("p");
  pastElement.innerText = `${remainingIncome}`;
  testDiv.innerHTML = "";
  testDiv.appendChild(pastElement);
});
// this adds cost to costArray and updates the remaining income variable
expensesForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let data = new FormData(expensesForm);
  let typeCost = document.querySelector(`#typeCost`);

  let numberCost = data.get(`number`);
  // let typeCost = data.get(`type`)
  let newCost = {
    numberCost: +numberCost,
    typeCost: typeCost.value,
  };
  costArray.push(newCost);
  console.log(costArray);
  totalSumOfNumberCost(costArray);
});
// this finds the sum of the cost of ever item in the array
function totalSumOfNumberCost(array) {
  let totalSum = 0;
  for (i of array) {
    console.log(i.numberCost);
    totalSum += i.numberCost;
  }
  return totalSum;
}
