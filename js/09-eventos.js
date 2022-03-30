const subTitulo = document.querySelector('h2');
const mensagem = document.querySelector('#mensagem');

let contador = 1;
subTitulo.addEventListener('click', ()=> mensagem.textContent = `${contador++} Clicou`)

subTitulo.addEventListener('mouseout', ()=> mensagem.textContent = '')


/* Exemplo dois noturno */
const noturno = document.querySelector('#noturno');
const pagina = document.querySelector('body');


/* Local storage para manter modo noturno */
if(localStorage.getItem('modo')){
    pagina.classList.add('modo-noturno');
    noturno.textContent = 'Desativar'
}


/* Adicionando modo noturno ao click - add localstarage e removendo */
noturno.addEventListener('click',()=>{
     
    // Adicionando e removendo a classe
    pagina.classList.toggle('modo-noturno');

    //condicional para o texto do botao e localstorage
    if(noturno.textContent == 'Ativar'){
        noturno.textContent = 'Desativar'
        localStorage.setItem('modo', 'Ativado');
    }else{
        noturno.textContent = 'Ativar'
        localStorage.removeItem('modo');
    }
   
})

/* Exemplo 3 - Formulario*/
const formulario = document.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const nota1 = formulario.querySelector('#nota1');
const nota2 = formulario.querySelector('#nota2');
const tabela = document.querySelector('tbody');



formulario.addEventListener('submit', (event)=>{
    event.preventDefault()
    
    let nome = campoNome.value;
    let notaA = parseFloat(nota1.value);
    let notaB = parseFloat(nota2.value);
    let media = (notaA + notaB) / 2


    let situacao;
    if(media >= 7){
        situacao = 'Aprovado';
     
    }else{
        situacao = 'Reprovado';
       
    }

        
    /* Criar elemento tr */
    let linha = document.createElement('tr');
    /* Criar conteudo para o tr */
    let alunos = linha.innerHTML = `<td>${nome}</td> <td>${media}</td> <td>${situacao}</td>`

    // colocando o conteudo dentro da tabela 
    tabela.appendChild(linha);
    


    if(situacao == 'Aprovado'){
        linha.setAttribute('class', 'verde');
    }else{
        linha.setAttribute('class', 'vermelho');
    }

   
    
})


