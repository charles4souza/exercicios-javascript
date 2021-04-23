function calculadora(n1,calculo,n2){
    switch(calculo){
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "*":
            return n1 * n2
        case "/":
            return n1 / n2 
    }
}
console.log(calculadora(5,'+',7))
