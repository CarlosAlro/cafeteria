function exibirDados(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    document.getElementById("resultadoNome").textContent = nome;
    document.getElementById("resultadoEmail").textContent = email;

    document.getElementById("dadosCadastrados").style.display = "block";

    document.getElementById("overlayBackground").style.display = "block";
    fecharPopup();
}

function fecharPopup() {
    document.getElementById("popupCadastro").style.display = "none";
    document.getElementById("overlayBackground").style.display = "none"; // Esconde o fundo desfocado
}

function abrirPopup() {
    document.getElementById("popupCadastro").style.display = "block";
    document.getElementById("overlayBackground").style.display = "block"; // Exibe o fundo desfocado
}




// function abrirPopup() {
//     document.getElementById("popupCadastro").style.display = "block";
//     document.body.classList.add("overlay");
//     const overlay = document.createElement("div");
//     overlay.className = "overlay-background";
//     overlay.onclick = fecharPopup;
//     document.body.appendChild(overlay);
// }

// function fecharPopup() {
//     document.getElementById("popupCadastro").style.display = "none";
//     document.body.classList.remove("overlay");
//     const overlay = document.querySelector(".overlay-background");
//     if (overlay) overlay.remove();
// }