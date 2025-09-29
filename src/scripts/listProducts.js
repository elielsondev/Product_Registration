const nameStorage = document.getElementById("name-storage");
const emailStorage = document.getElementById("email-storage");

function recoveryDataLogin () {
    const { name, email } = JSON.parse(localStorage.getItem("dataLogin"))[0];
    nameStorage.innerHTML = `Olá, seja bem-vindo(a): ${name}`;
    emailStorage.innerHTML = email;
};

recoveryDataLogin();

const btnLogout = document.getElementById("btn-logout");
btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("dataLogin");
    window.location.href = "/index.html";
});

const btnPageRegisterNewProduct = document.getElementById("page-register-new-product");
btnPageRegisterNewProduct.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/src/pages/addProducts.html";
});
