let costArray = [];
let filter = document.querySelector(`#filter`);
let firstForm = document.querySelector(`#incomeForm`);
let cost = totalSumOfNumberCost(costArray);
let expensesForm = document.querySelector(`#expensesForm`);
//This is posting the remaining income after submit
firstForm.addEventListener("submit", displayIncome);

//This function name is wonky. I didn't realize it was a form submission until a few lines in.
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

//This could be broken up a bit into smaller, more readable functions
// this adds cost to costArray and updates the remaining income variable
expensesForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  //nitpick: if it's global, maybe bring it up top with the other querySelectors because then it's easy to find all of them.
  let clear = document.querySelector(`#expensesTotal`);
  let data2 = new FormData(firstForm); //gets the income input
  let income = data2.get("expensesNumber"); //sets variable to that input
  // let remainingIncome = +income - +totalSumOfNumberCost(costArray);// variable is equal to the input - the array (the array is empty)
  let data = new FormData(expensesForm); // gets how much the expense costs (number)
  let typeCost = document.querySelector(`#expensesType`); // gets the type of expense

  let numberCost = data.get(`expenseNumber`); // sets input equal to variable
  // let typeCost = data.get(`type`)

  //Good use of OOP (object oriented programming)
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

  //Yes, functions like this are good.
  // totalSumOfNumberCost(costArray);// finds total cost on the array? (not sure why i need this it returns the sum)
  displayExpenseList(); // goes through the list and prints them to a <ul>

  let testDiv = document.querySelector("#incomeTotal"); // targets where im putting the remain income

  //Is this clean up?
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

//If you see a big ol' function like this, it's a sign that you may need to break it up
//Which is normal! Basically what you're doing is filtering based on the category of the expense then displaying the expenses on screen.
//Could you maybe write a function that takes in the type of expense then properly writes the divs to the right parent element?

function setFilter() {
  let filterSetting = document.querySelector(`#expensesFilter`);
  //ExpensesTotalDiv makes more sense
  let testDiv = document.querySelector(`#expensesTotal`);
  if (filterSetting.value === `entertainment`) {
    let result = costArray.filter((i) => i.typeCost === `entertainment`);
    testDiv.innerHTML = ``;
    let sum = 0;
    //please stay away from single character variable names. It took me too long to figure out what 'i' was
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      testDiv.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of entertainment: $${sum}`;
    testDiv.appendChild(elemSum);
  }
  if (filterSetting.value === `food`) {
    let result = costArray.filter((i) => i.typeCost === `food`);
    testDiv.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      testDiv.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of food: $${sum}`;
    testDiv.appendChild(elemSum);
  }
  if (filterSetting.value === `clothing`) {
    let result = costArray.filter((i) => i.typeCost === `clothing`);
    testDiv.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      testDiv.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of clothing: $${sum}`;
    testDiv.appendChild(elemSum);
  }
  if (filterSetting.value === `bills`) {
    let result = costArray.filter((i) => i.typeCost === `bills`);
    testDiv.innerHTML = ``;
    let sum = 0;
    for (i of result) {
      sum += i.numberCost;
      let elem = document.createElement("li");
      elem.innerText = `amount: $${i.numberCost} | expense type: ${i.typeCost}`;
      testDiv.appendChild(elem);
    }
    let elemSum = document.createElement(`p`);
    elemSum.innerText = `The total cost of bills: $${sum}`;
    testDiv.appendChild(elemSum);
  }
}
