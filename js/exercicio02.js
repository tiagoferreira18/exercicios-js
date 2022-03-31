const resultado = document.querySelector('.saida')


let dados = {
    nome : 'Tiago',
    idade : 33,
    dataNascimento: '14/10/1988',
    sexo: 'masculino',
    cidade: 'Guarulhos / SP'
}

resultado.innerHTML = `O ${dados.nome} tem ${dados.idade} anos e está na cidade de ${dados.cidade}.`