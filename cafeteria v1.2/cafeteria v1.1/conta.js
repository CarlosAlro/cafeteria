
// Função para exibir os dados cadastrados ao clicar em "Minha Conta"
document.getElementById("minhaConta").addEventListener("click", function (event) {
    event.preventDefault(); // Evita comportamento padrão do link

    const dadosCadastrados = document.getElementById("dadosCadastrados");
    const overlayBackground = document.getElementById("overlayBackground");

    // Alterna a exibição da seção de dados cadastrados e do fundo desfocado
    if (dadosCadastrados.style.display === "none" || dadosCadastrados.style.display === "") {
        dadosCadastrados.style.display = "block";
        overlayBackground.style.display = "block"; // Exibe o fundo desfocado
    } else {
        dadosCadastrados.style.display = "none";
        overlayBackground.style.display = "none"; // Esconde o fundo desfocado
    }
});

function fecharDadosCadastrados() {
    document.getElementById("dadosCadastrados").style.display = "none";
    document.getElementById("overlayBackground").style.display = "none"; // Esconde o fundo desfocado
}


