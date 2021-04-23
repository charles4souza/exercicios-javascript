function jSimples(cainicial, txjuros, taplic){
    return cainicial + (cainicial*txjuros*taplic)
}
function jCompostos (cainicial, txjuros, taplic) {
    return cainicial * (1 + txjuros) ** taplic
}

console.log(jSimples(100, 10/100, 2));
console.log(jCompostos(100, 10/100, 2));
