function planosaude(idade){
    if(idade<10){
        return 180.00
    }else if(idade < 30){
        return 150.00
    }else if(idade < 60){
            return 195.00
        }else{
            return 230.00
        }
    }

console.log(planosaude(8))
console.log(planosaude(29))
console.log(planosaude(40))
console.log(planosaude(60))