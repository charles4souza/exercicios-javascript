function dsemana(n){
    switch (n){
        case 1:
            return "Domingo / Fim de Semana"
        case 2: 
            return "Segunda / Dia útil"
        case 3: 
             return "Terça / Dia útil"
        case 4:
            return "Quarta / Dia útil"
        case 5:
            return "Quinta / Dia útil"
        case 6:
            return "Sexta / Dia útil"
        case 7:
            return "Sábado / Dia útil"
        case 8:
            return "Dia inválido"
    }
}
console.log(dsemana(3))