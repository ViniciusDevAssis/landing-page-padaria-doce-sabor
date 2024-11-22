var produtos = document.querySelectorAll('.produto')

produtos.forEach(function (produto) {
    produto.addEventListener('click', function(){
        produto.classList.toggle('active')
    })
})