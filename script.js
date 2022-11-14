let costArray = [
  { numberCost: 50, typeCost: `bill` },
  { numberCost: 50, typeCost: `bill` },
  { numberCost: 50, typeCost: `bill` },
];

let firstForm = document.querySelector(`#incomeForm`);
let cost = totalSumOfNumberCost(costArray);
// let remainingIncome = income - cost;
let expensesForm = document.querySelector(`#expensesForm`);
console.log(expensesForm)
//This is posting the remaining income after submit
firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(firstForm);

  let income = data.get("expensesNumber");

  let remainingIncome = +income - +cost;

  let testDiv = document.querySelector("#incomeTotal");

  let pastElement = document.createElement("p");
  pastElement.innerText = `${remainingIncome}`;
  testDiv.innerHTML = "";
  testDiv.appendChild(pastElement);
});
// this adds cost to costArray and updates the remaining income variable
expensesForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let data = new FormData(expensesForm);
  let typeCost = document.querySelector(`#expensesType`);

  let numberCost = data.get(`expenseNumber`);
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
// function makeExpenseList(item) {
//   for (let item of costArray)
  
// }
