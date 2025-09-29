const nameStorage = document.getElementById("name-storage");
const emailStorage = document.getElementById("email-storage");

function recoveryDataLogin () {
    const { name, email } = JSON.parse(localStorage.getItem("dataLogin"))[0];

    nameStorage.innerHTML = `Olá, seja bem-vindo(a): ${name}`;
    emailStorage.innerHTML = email;
};

recoveryDataLogin();