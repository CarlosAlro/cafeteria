//seleciona os itens clicando
var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
        // isso significa que removeremos uma classe ativo de um item que nao foi clicado
        item.classList.remove('ativo') 
    )
    // esse por outro lado esta adicionando uma classe onde foi clicado
    this.classList.add('ativo')
}
//((item)=>)  uma arrowfunction
menuItem.forEach((item)=>
    item.addEventListener('click',selectlink)
)

//expandir o menu
var btnExpan = document.querySelector('#btn-expan')
var menuSide = document.querySelector('.menu-lateral')

btnExpan.addEventListener('click',function(){
//toggle nesse caso sempre que for clicado no botão de expandir se existi a classe de expandir "sera removida" 
//se nao existir "sera adicionada"
    menuSide.classList.toggle('expandir')
})



// //seleciona os itens clicando
// var coracao = document.querySelectorAll('.like')

// function secCoracao(){
//     coracao.forEach((icon)=>
//         // isso significa que removeremos uma classe ativo de um item que nao foi clicado
//         icon.classList.remove('curtido') 
//     )
//     // esse por outro lado esta adicionando uma classe onde foi clicado
//     this.classList.add('curtido')
// }
// coracao.forEach((icon)=>
//     icon.addEventListener('click',secCoracao)
// )

// //expandir o menu
// var btnExpan = document.querySelector('#btn-expan')
// var menuSide = document.querySelector('.menu-lateral')

// btnExpan.addEventListener('click',function(){
// //toggle nesse caso sempre que for clicado no botão de expandir se existi a classe de expandir "sera removida" 
// //se nao existir "sera adicionada"
//     menuSide.classList.toggle('expandir')
// })
