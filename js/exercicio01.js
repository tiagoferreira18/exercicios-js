let curso = prompt('Digite o nome do curso');
let cargaHoraria = parseFloat(prompt('Digite a carga horária'))

let limiteFaltas = cargaHoraria / 4;

console.log(curso);
console.log(cargaHoraria);

console.log(`O Curso ${curso} tem a carga horária de ${cargaHoraria} horas, e possui um limite de faltas de ${limiteFaltas} horas.`);