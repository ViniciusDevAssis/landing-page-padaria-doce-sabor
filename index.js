var produtos = document.querySelectorAll('.produto')

produtos.forEach(function (produto) {
    produto.addEventListener('click', function(){
        produto.classList.toggle('active')
    })
})

var depoimentos = document.querySelectorAll('.depoimento')

depoimentos.forEach(function (depoimento) {
    depoimento.addEventListener('click', function(){
        depoimento.classList.toggle('active')
    })
})