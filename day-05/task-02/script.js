let printEmail = document.querySelector(".print-email");
let printPassword = document.querySelector(".print-password");
let buttonElement = document.getElementById("getUser");

function printUser() {
  let userEmail = document.querySelector("#email").value;
  let userPassword = document.querySelector("#password").value;
  printEmail.innerHTML = `Email : ${userEmail} `;
  printPassword.innerHTML = `Password : ${userPassword}`;
}
buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  printUser();
});
