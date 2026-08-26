//VARIABLES

document.addEventListener("DOMContentLoaded", () => {
  let blabla ='';

  //DOCUMENT ELEMENTS
  const coatNumbers = document.getElementById("coat-numbers");

  //EVENT LISTENERS
  coatNumbers.addEventListener("click", (e) => {changePage(e)});
});

//FUNCTIONS
function changePage(e) {
  let numDiv = e.target.closest(".number");

  if (numDiv.classList.contains("assigned")) {
  }
  else if (numDiv.classList.contains("unassigned")) {
    e.preventDefault();
    // TODO: Instead of alert, make it a pop-up that fades away (or with X)
    alert("Number not assigned yet.")
  }
}