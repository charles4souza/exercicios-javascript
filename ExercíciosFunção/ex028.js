function paresImpares(vetorNumeros) {
    let qtdPares = 0 //declarou variável
    let qtdImpares = 0 //declarou qtd pares e impares
    for (let i = 0; i < vetorNumeros.length; i++) { //fez a contagem com .lenght
        if (vetorNumeros[i] % 2 == 0) { //para achar valores pares
            qtdPares++ //contagem
        } else {
            qtdImpares++ //para achar valores impares
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)