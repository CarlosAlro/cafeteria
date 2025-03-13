function exibirDados(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    document.getElementById("resultadoNome").textContent = nome;
    document.getElementById("resultadoEmail").textContent = email;

    document.getElementById("dadosCadastrados").style.display = "block";

    document.getElementById("overlayBackground").style.display = "block";

    fecharPopup();
}



function abrirPopup() {
    document.getElementById("popupCadastro").style.display = "block";
    document.getElementById("overlayBackground").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popupCadastro").style.display = "none";
    document.getElementById("overlayBackground").style.display = "none";
}