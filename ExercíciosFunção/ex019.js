function cardapio(codigo, quant, vpago){
    switch(codigo){
        case 100:
            return quant * 3
        case 200:
            return quant * 4
        case 300:
            return quant * 5
        case 400:
            return quant * 3
    }
}
console.log(cardapio(100, 3))
console.log(cardapio(200, 5))
console.log(cardapio(300, 6))
console.log(cardapio(400, 7))

