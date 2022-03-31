const formulario = document.querySelector('form');
const campoCurso = formulario.querySelector('#curso');
const campoHora = formulario.querySelector('#horas');
const paragrafo = document.querySelector('.DOM')

// let curso = prompt('Digite o nome do curso');
// let cargaHoraria = parseFloat(prompt('Digite a carga horária'))

// let limiteFaltas = cargaHoraria / 4;


formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    let curso = campoCurso.value;
    let hora = parseFloat(campoHora.value);
    
    let limiteFaltas = hora/4;

    paragrafo.innerHTML = `O Curso ${curso} tem a carga horária de ${hora} horas, e possui um limite de faltas de ${limiteFaltas} horas.`;

    formulario.reset();
    campoCurso.focus();

})



