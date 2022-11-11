let firstForm = document.querySelector(`#formContainer`);
let cost =  //this will target the array (of expenses) so we can select total cost
let remainingIncome = income - cost;
let expensesForm = document.querySelector(`placeholder for form that has cost`)
let costArray = [{
  numberCost: 50, typeCost: `bill`},
  {numberCost: 50, typeCost: `bill`},
  {numberCost: 50, typeCost: `bill`},
]

firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = FormData(firstForm);

  let income = data.get("inputContainerName");

  let remainingIncome = income - cost;

  let testDiv = document.querySelector("#test");

  let pastElement = document.createElement("p");
  pastElement.innerText = `${remainingIncome}`;
  testDiv.appendChild(pastElement);
  console.log(testDiv);
});

expensesForm.addEventListener(`submit`,(e) => {
  e.preventDefault();
  let data = FormData(expensesForm)

  let numberCost = data.get(`number for cost`)
  let typeCost = data.get(`type of cost selected with drop down`)
  let newCost = {
    numberCost: numberCost,
    typeCost: typeCost
  }
  costArray.push(newCost)
})

function totalSumOfNumberCost(costArray) {
  let totalSum
  for (i of costArray){
    totalSum += i.numberCost
  }
}
