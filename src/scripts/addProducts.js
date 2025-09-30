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

const btnPageViewRegisteredProducts = document.getElementById("page-view-registered-products");
btnPageViewRegisteredProducts.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/src/pages/listProducts.html";
});