//VARIABLES

document.addEventListener("DOMContentLoaded", () => {

  //DOCUMENT ELEMENTS
  const coatNumbers = document.getElementById("coat-numbers");
  const unassign = document.getElementById("unassign");

  //EVENT LISTENERS
  coatNumbers.addEventListener("click", (e) => {changePage(e)});
  unassign.addEventListener("click", (e) => {unassignNumber(e)});
});

//FUNCTIONS
function changePage(e) {
  let numDiv = e.target.closest(".number");

  if (numDiv.classList.contains("assigned")) {
  }
  else if (numDiv.classList.contains("unassigned")) {
    e.preventDefault();
    // TODO: Instead of alert, make it a pop-up that fades away (or with X)
    alert("Number not assigned yet.");
  }
}
function unassignNumber(e) {
  const confirm = window.confirm("Are you sure you want to unassign this number?");
  if (confirm) {
    console.log("Unassigning");
  }
  else {
    console.log("Nothing");
  }
}