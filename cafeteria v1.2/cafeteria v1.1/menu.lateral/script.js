var menuItem = document.querySelectorAll('.item-menu')

function selectlink() {
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}



menuItem.forEach((item)=>
    item.addEventListener('click',selectlink)
);




var btnExpan = document.querySelector('#btn-expan');
var menuSide = document.querySelector('.menu-lateral');

btnExpan.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
  });