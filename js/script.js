//const answer = confirm("Do you confirm?")

function sum(a, b) {
  return (a + b);
}
document.getElementById("btn-calc").onclick = function (){
  let valueA = document.getElementById("valueA").value;
  let valueB = document.getElementById("valueB").value;
  console.log(parseInt(valueA) + parseInt(valueB));
}