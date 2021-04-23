let vetorInteiro = [4,5,6,7]
let vetorString = ['joao', 'mateus', 'marcos', 'lucia']
let vetorDouble = [1.2, 1.5, 3.4, 4.8]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i]) //A função de união concat serve pra 
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))