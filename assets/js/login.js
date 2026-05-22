import { usuario } from "./db.js";

const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformado = document.getElementById("senha").value;


    if (emailInformado === email) {
        alert("E-mail informado corretamente");
        if (senhaInformado === senha) {
            alert("senha informada corretamente!");
            window.location = "home.html";
        } else
            alert("senha informada incorretamente!");
    } else
        alert("E-mail informado incorretamnete");
}

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        verificarCredenciais();
    });
});

