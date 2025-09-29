console.log("Running, Product Registration!");

const formLogin = document.getElementById("form-login");

const userName = document.getElementById("username");
const email = document.getElementById("email");

const btnEnter = document.getElementById("btn-enter");


btnEnter.addEventListener("click", (e) => {
  e.preventDefault();

  if (localStorage.key("dataLogin")) {
    localStorage.removeItem("dataLogin");
  }

  if (userName.value === "" || email.value === "") {
    alert("Por favor, preencha os campos com nome e e-mail para poder logar!");
    return;
  }

  const dataLogin = { name:userName.value, email:email.value };
  console.log(dataLogin);
  
  const register = JSON.parse(localStorage.getItem("dataLogin")) || [];

  register.push(dataLogin);
  console.log(register);
  
  window.location.href = "./src/pages/addProducts.html";
  
  userName.value = "";
  email.value = "";
});
