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
  pastElement.innerText = `${remainingIncome}`;
  testDiv.innerHTML = "";
  testDiv.appendChild(pastElement);
}

// this adds cost to costArray and updates the remaining income variable
expensesForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let clear = document.querySelector(`#filterDisplay`);
  let data2 = new FormData(firstForm); //gets the income input
  let income = data2.get("expensesNumber"); //sets variable to that input
  // let remainingIncome = +income - +totalSumOfNumberCost(costArray);// variable is equal to the input - the array (the array is empty)
  let data = new FormData(expensesForm); // gets how much the expense costs (number)
  let typeCost = document.querySelector(`#expensesType`); // gets the type of expense

  let numberCost = data.get(`expenseNumber`); // sets input equal to variable
  // let typeCost = data.get(`type`)

  let newCost = {
    numberCost: +numberCost,
    typeCost: typeCost.value,
  }; // object with both inputs that can be pushed to the array
  costArray.push(newCost); // the push
  if (income - totalSumOfNumberCost(costArray) < 0) {
    alert(`Insufficant funds.`);
    costArray.pop();
    return;
  }

  // totalSumOfNumberCost(costArray);// finds total cost on the array? (not sure why i need this it returns the sum)
  displayExpenseList(); // goes through the list and prints them to a <ul>

  let testDiv = document.querySelector("#incomeTotal"); // targets where im putting the remain income

  let pastElement = document.createElement("p"); //variable to make the <p>
  pastElement.innerText = `${+income - totalSumOfNumberCost(costArray)}`; //prints the remainingIncome
  testDiv.innerHTML = ""; //emptys the list to prevent duping
  testDiv.appendChild(pastElement); //puts the <p> on the DOM
  console.log(totalSumOfNumberCost(costArray));
  clear.innerHTML = ``;
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
  if (filterSetting.value === `entertainment`) {
    let result = costArray.filter((i) => i.typeCost === `entertainment`);
    filterDisplay.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      filterDisplay.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of entertainment: $${sum}`;
    filterDisplay.appendChild(elemSum);
  }
  if (filterSetting.value === `food`) {
    let result = costArray.filter((i) => i.typeCost === `food`);
    filterDisplay.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      filterDisplay.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of food: $${sum}`;
    filterDisplay.appendChild(elemSum);
  }
  if (filterSetting.value === `clothing`) {
    let result = costArray.filter((i) => i.typeCost === `clothing`);
    filterDisplay.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      filterDisplay.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of clothing: $${sum}`;
    filterDisplay.appendChild(elemSum);
  }
  if (filterSetting.value === `bills`) {
    let result = costArray.filter((i) => i.typeCost === `bills`);
    filterDisplay.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      filterDisplay.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of bills: $${sum}`;
    filterDisplay.appendChild(elemSum);
  }
}
