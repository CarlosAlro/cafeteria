const sectionProdutos = document.getElementById('card-prod');

// Função para continuar comprando e rolar para a seção de produtos
function continuarComprando() {
    const sectionProdutos = document.getElementById('card-prod');  // Certifique-se de que o ID está correto
    if (sectionProdutos) {
        sectionProdutos.scrollIntoView({ behavior: 'smooth', block: 'start' });  // Rola suavemente até a seção
    } else {
        console.log("Seção de produtos não encontrada!");
    }
}

// Função de finalização de compra (sem alterações)
function finalizarCompra() {
    if (carrinho.length > 0) {
        mostrarModalCompra();  // Exibe o modal com o total
        carrinho = [];  // Esvazia o carrinho
        atualizarCarrinho();  // Atualiza a interface (limpando o carrinho e contador)
        carrinhoContainer.classList.remove('carrinho-aberto');  // Fecha o carrinho
    } else {
        mostrarPopupCarrinhoVazio();  // Exibe o popup de carrinho vazio
    }
}
