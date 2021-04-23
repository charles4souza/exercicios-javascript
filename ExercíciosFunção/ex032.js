function media(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
        }  
    return soma/vetor.length
}
vetor = [4,5,6,7]

console.log(media(vetor))