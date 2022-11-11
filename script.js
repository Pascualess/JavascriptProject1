let firstForm = document.querySelector(`#formContainer`);
let cost = 500; //this will target the array (of expenses) so we can select total cost

firstForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = FormData(firstForm);
  let fistdiv = document.querySelector(`firstPage`);

  let income = 2000; //data.get("inputContainerName");

  let remainingIncome = income - cost;
  let testDiv = document.querySelector("#test");
  let pastElement = document.createElement("p");
  pastElement.innerText = `${remainingIncome}`;
  testDiv.appendChild(pastElement);
  console.log(testDiv);
});
