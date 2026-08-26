//VARIABLES

document.addEventListener("DOMContentLoaded", () => {

  //DOCUMENT ELEMENTS
  const unassign = document.getElementById("unassign");

  //EVENT LISTENERS
  unassign.addEventListener("click", (e) => {unassignNumber(e)});
});

//FUNCTIONS
function unassignNumber(e) {
  const confirm = window.confirm("Are you sure you want to unassign this number?");
  if (confirm) {
    console.log("Unassigning");
  }
  else {
    console.log("Nothing");
  }
}