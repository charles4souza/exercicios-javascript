function inteironegativo(vetor){
    let negativo = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i]< 0){
            negativo++;
        }
    }   
    return[negativo]
}
vetor = [1,2,3,4,-1,-2,-3,-4]

console.log(inteironegativo(vetor))

