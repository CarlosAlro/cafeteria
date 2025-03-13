let carrinho = [];
let total = 0;

// Seleciona os elementos
const carrinhoContainer = document.getElementById('carrinho-container');
const abrirCarrinhoBtn = document.getElementById('abrir-carrinho');
const ulCarrinho = document.getElementById('itensCarrinho');
const totalPreco = document.getElementById('totalPreco');
const contadorItens = document.getElementById('contador-itens');
const modalCompra = document.getElementById('modalCompra');
const fecharModalBtn = document.getElementById('fecharModal');
const modalTotalPreco = document.getElementById('modalTotalPreco');

// Função para atualizar o contador de itens no botão
function atualizarContador() {
    const quantidade = carrinho.length;
    contadorItens.textContent = quantidade; // Atualiza o texto com a quantidade de itens

    // Esconde o contador se não houver itens
    if (quantidade === 0) {
        contadorItens.classList.add('hidden');
    } else {
        contadorItens.classList.remove('hidden');
    }
}

// Abre ou fecha o carrinho
abrirCarrinhoBtn.addEventListener('click', () => {
    carrinhoContainer.classList.toggle('carrinho-aberto');
});

// Fecha o carrinho ao clicar fora dele
window.addEventListener('click', (e) => {
    if (!carrinhoContainer.contains(e.target) && e.target !== abrirCarrinhoBtn) {
        carrinhoContainer.classList.remove('carrinho-aberto');
    }
});

// Atualizar o carrinho na tela
function atualizarCarrinho() {
    ulCarrinho.innerHTML = ''; // Limpa a lista antes de atualizar

    // Adicionar cada item do carrinho à lista
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)} 
            <button onclick="removerDoCarrinho(event, ${index})">Remover</button>
        `;
        ulCarrinho.appendChild(li);
    });

    // Atualizar o total
    total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    totalPreco.textContent = total.toFixed(2);

    // Atualiza o contador de itens
    atualizarContador();
}

// Adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco: parseFloat(preco) });
    atualizarCarrinho();
}

// Remover um item do carrinho
function removerDoCarrinho(event, index) {
    event.stopPropagation();
    carrinho.splice(index, 1); // Remove o item
    atualizarCarrinho(); // Atualiza a interface
}

// Lidar com os botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-carrinho').forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.getAttribute('data-nome');
        const preco = button.getAttribute('data-preco');
        adicionarAoCarrinho(nome, preco);
    });
});

// Função para mostrar o popup de carrinho vazio
function mostrarPopupCarrinhoVazio() {
    const popupCarrinhoVazio = document.getElementById('popupCarrinhoVazio');
    popupCarrinhoVazio.style.display = 'block';
}

// Fechar o popup de carrinho vazio
document.getElementById('fecharPopupCarrinho').addEventListener('click', () => {
    const popupCarrinhoVazio = document.getElementById('popupCarrinhoVazio');
    popupCarrinhoVazio.style.display = 'none';
});

// Função para mostrar o modal de compra
function mostrarModalCompra() {
    modalCompra.style.display = 'block'; // Exibe o modal
    modalTotalPreco.textContent = total.toFixed(2); // Atualiza o total da compra no modal
}

// Fechar o modal ao clicar no botão de fechar
fecharModalBtn.addEventListener('click', () => {
    modalCompra.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modalCompra) {
        modalCompra.style.display = 'none';
    }
});

// Finalizar a compra
function finalizarCompra() {
    if (carrinho.length > 0) {
        mostrarModalCompra(); // Exibe o modal com o total
        carrinho = []; // Esvazia o carrinho
        atualizarCarrinho(); // Atualiza a interface (limpando o carrinho e contador)
        carrinhoContainer.classList.remove('carrinho-aberto'); // Fecha o carrinho
    } else {
        mostrarPopupCarrinhoVazio(); // Exibe o popup de carrinho vazio
    }
}















// // Inicializa o carrinho como um array global
// let carrinho = [];
// let total = 0;

// // Seleciona os elementos
// const carrinhoContainer = document.getElementById('carrinho-container');
// const abrirCarrinhoBtn = document.getElementById('abrir-carrinho');
// const ulCarrinho = document.getElementById('itensCarrinho');
// const totalPreco = document.getElementById('totalPreco');
// const contadorItens = document.getElementById('contador-itens');
// const modalCompra = document.getElementById('modalCompra');
// const fecharModalBtn = document.getElementById('fecharModal');
// const modalTotalPreco = document.getElementById('modalTotalPreco');

// // Função para atualizar o contador de itens no botão
// function atualizarContador() {
//     const quantidade = carrinho.length;
//     contadorItens.textContent = quantidade; // Atualiza o texto com a quantidade de itens

//     // Esconde o contador se não houver itens
//     if (quantidade === 0) {
//         contadorItens.classList.add('hidden'); // Esconde o contador quando não há itens
//     } else {
//         contadorItens.classList.remove('hidden'); // Mostra o contador quando há itens
//     }
// }

// // Abre ou fecha o carrinho
// abrirCarrinhoBtn.addEventListener('click', () => {
//     carrinhoContainer.classList.toggle('carrinho-aberto'); // Alterna entre aberto e fechado
// });

// // Fecha o carrinho ao clicar fora (opcional)
// window.addEventListener('click', (e) => {
//     if (!carrinhoContainer.contains(e.target) && e.target !== abrirCarrinhoBtn) {
//         carrinhoContainer.classList.remove('carrinho-aberto');
//     }
// });

// // Atualizar o carrinho na tela
// function atualizarCarrinho() {
//     ulCarrinho.innerHTML = ''; // Limpa a lista antes de atualizar

//     // Adicionar cada item do carrinho à lista
//     carrinho.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             ${item.nome} - R$ ${item.preco.toFixed(2)} 
//             <button onclick="removerDoCarrinho(event, ${index})">Remover</button>
//         `;
//         ulCarrinho.appendChild(li);
//     });

//     // Atualizar o total
//     total = carrinho.reduce((acc, item) => acc + item.preco, 0);
//     totalPreco.textContent = total.toFixed(2);

//     // Atualiza o contador de itens
//     atualizarContador();
// }

// // Adicionar um item ao carrinho
// function adicionarAoCarrinho(nome, preco) {
//     carrinho.push({ nome, preco: parseFloat(preco) });
//     atualizarCarrinho(); // Atualiza o carrinho e o contador
// }

// // Remover um item do carrinho
// function removerDoCarrinho(event, index) {
//     event.stopPropagation(); // Impede que o evento de clique no botão remova o carrinho
//     carrinho.splice(index, 1); // Remove o item
//     atualizarCarrinho(); // Atualiza o carrinho e o contador
// }

// // Lidar com os botões "Adicionar ao Carrinho"
// document.querySelectorAll('.add-carrinho').forEach(button => {
//     button.addEventListener('click', () => {
//         const nome = button.getAttribute('data-nome');
//         const preco = button.getAttribute('data-preco');
//         adicionarAoCarrinho(nome, preco);
//     });
// });


// // Função para mostrar o popup de carrinho vazio
// function mostrarPopupCarrinhoVazio() {
//     const popupCarrinhoVazio = document.getElementById('popupCarrinhoVazio');
//     popupCarrinhoVazio.style.display = 'block'; // Exibe o popup
// }

// // Fechar o popup de carrinho vazio
// document.getElementById('fecharPopupCarrinho').addEventListener('click', () => {
//     const popupCarrinhoVazio = document.getElementById('popupCarrinhoVazio');
//     popupCarrinhoVazio.style.display = 'none'; // Fecha o popup
// });

// // Finalizar a compra
// function finalizarCompra() {
//     if (carrinho.length > 0) {
//         mostrarModalCompra();  // Exibe o modal com o total
//         carrinho = [];  // Esvazia o carrinho
//         atualizarCarrinho();  // Atualiza a interface (limpando o carrinho e contador)
//         carrinhoContainer.classList.remove('carrinho-aberto');  // Fecha o carrinho
//     } else {
//         mostrarPopupCarrinhoVazio();  // Exibe o popup de carrinho vazio
//     }
// }


// // Seleciona os elementos
// const modalCompra = document.getElementById('modalCompra');
// const modalTotalPreco = document.getElementById('modalTotalPreco');
// const fecharModalBtn = document.getElementById('fecharModal');
// const carrinhoContainer = document.getElementById('carrinho-container');

// // Função para mostrar o modal de compra
// function mostrarModalCompra() {
//     modalCompra.style.display = 'block'; // Exibe o modal
//     modalTotalPreco.textContent = total.toFixed(2); // Atualiza o total da compra no modal
// }

// // Fechar o modal ao clicar no botão de fechar
// fecharModalBtn.addEventListener('click', () => {
//     modalCompra.style.display = 'none'; // Fecha o modal
// });

// // Fechar o modal ao clicar fora dele
// window.addEventListener('click', (e) => {
//     if (e.target === modalCompra) {
//         modalCompra.style.display = 'none'; // Fecha o modal ao clicar fora
//     }
// });

// // Finalizar a compra
// function finalizarCompra() {
//     if (carrinho.length > 0) {
//         mostrarModalCompra();  // Exibe o modal com o total
//         carrinho = [];  // Esvazia o carrinho
//         atualizarCarrinho();  // Atualiza a interface (limpando o carrinho e contador)
//         carrinhoContainer.classList.remove('carrinho-aberto');  // Fecha o carrinho
//     } else {
//         mostrarPopupCarrinhoVazio();  // Exibe o popup de carrinho vazio
//     }
// }

// Inicializa o carrinho como um array global





