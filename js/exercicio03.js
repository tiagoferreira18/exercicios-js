const resultado = document.querySelector('.resultado')

let pedido = {
    numeroPedido: 0001,
    data: '31/03/2022',
    produtos: ['Play 5', 'TV'],
    valor: 1500.00,
    prazoEntrega: '5 dias úteis'
}


let formatado = {
    style : 'currency',
    currency : 'BRL'
}


resultado.textContent = `Numero do Pedido ${pedido.numeroPedido} - Produtos escolhidos ${pedido.produtos[0]} e ${pedido.produtos[1]} - Valor da compra ${pedido.valor.toLocaleString('pt-br', formatado)} `