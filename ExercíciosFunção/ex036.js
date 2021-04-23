let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){ //dois parâmetros
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
