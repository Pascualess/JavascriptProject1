let costArray = [];
let filter = document.querySelector(`#filter`);
let firstForm = document.querySelector(`#incomeForm`);
let cost = totalSumOfNumberCost(costArray);
let expensesForm = document.querySelector(`#expensesForm`);
//This is posting the remaining income after submit
firstForm.addEventListener("submit", displayIncome);

function displayIncome(e) {
  e.preventDefault();
  let data = new FormData(firstForm);
  let income = data.get("expensesNumber");
  let remainingIncome = +income - +totalSumOfNumberCost(costArray);
  let testDiv = document.querySelector("#incomeTotal");
  let pastElement = document.createElement("p");

  pastElement.innerText = `Weekly Budget Remaining: $${remainingIncome}`;
  testDiv.innerHTML = "";
  testDiv.appendChild(pastElement);
}

// this adds cost to costArray and updates the remaining income variable
expensesForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let clear = document.querySelector(`#filterDisplay`);
  let data2 = new FormData(firstForm);
  let income = data2.get("expensesNumber");
  let data = new FormData(expensesForm);
  let typeCost = document.querySelector(`#expensesType`);
  let numberCost = data.get(`expenseNumber`);
  let testDiv = document.querySelector("#incomeTotal");
  let pastElement = document.createElement("p");
  let newCost = {
    numberCost: +numberCost,
    typeCost: typeCost.value,
  };

  costArray.push(newCost);

  if (income - totalSumOfNumberCost(costArray) < 0) {
    alert(`Insufficant funds.`);
    costArray.pop();
    return;
  }

  displayExpenseList(); // goes through the list and prints them to a <ul>

  pastElement.innerText = `Weekly Budget Remaining: $${+income - totalSumOfNumberCost(costArray)}`;
  testDiv.innerHTML = "";
  testDiv.appendChild(pastElement);
  console.log(totalSumOfNumberCost(costArray));
  clear.innerHTML = ``; //removes the filter array
});

// this finds the sum of the cost of ever item in the array
function totalSumOfNumberCost(array) {
  let totalSum = 0;
  for (i of array) {
    totalSum += i.numberCost;
  }
  return totalSum;
}

function displayExpenseList() {
  let expensesArray = document.querySelector(`#testList`);
  expensesArray.innerHTML = "";
  for (let i of costArray) {
    makeExpenseList(i);
  }
}

function makeExpenseList(i) {
  let expensesArray = document.querySelector(`#testList`);
  let elem = document.createElement("li");
  elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
  expensesArray.appendChild(elem);
}

filter.addEventListener(`click`, setFilter);

function setFilter() {
  let filterSetting = document.querySelector(`#expensesFilter`);
  let filterDisplay = document.querySelector(`#filterDisplay`);
  if (filterSetting.value === `all`) {
    filterDisplay.innerText = ``
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of all expenses: $${totalSumOfNumberCost(costArray)}`;
    filterDisplay.appendChild(elemSum);
  }
  if (filterSetting.value === `entertainment`) {
    forFilterDisplay(`entertainment`, filterDisplay, filterSetting);
  }
  if (filterSetting.value === `food`) {
    forFilterDisplay(`food`, filterDisplay, filterSetting);
  }
  if (filterSetting.value === `clothing`) {
    forFilterDisplay(`clothing`, filterDisplay, filterSetting);
  }
  if (filterSetting.value === `bills`) {
    forFilterDisplay(`bills`, filterDisplay, filterSetting);
  }
}

function forFilterDisplay(expenseType, filterDisplay, filterSetting) {
  if (filterSetting.value === `${expenseType}`) {
    let result = costArray.filter((i) => i.typeCost === `${expenseType}`);
    filterDisplay.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      filterDisplay.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of ${expenseType}: $${sum}`;
    filterDisplay.appendChild(elemSum);
  }
}
