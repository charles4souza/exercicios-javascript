function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = [] //Até aqui eu entendi, declarou a variárel para indicar o array
    notas.push(nota1) //adciona elementos no array
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1) //ordena os elementos do próprio array

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)                     