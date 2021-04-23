function aumentosalario(plano, vsalario){
    switch(plano){
        case "A":
            return vsalario*1.1
        case "B":
            return vsalario*1.15
        case "C":
            return vsalario*1.20
        default:
            return 'Plano inválido.'
    }

}
console.log(aumentosalario("A", 1000))
console.log(aumentosalario("B", 1000))
console.log(aumentosalario("C", 1000))
