function comprarcarro(modelo){
    switch(modelo){
        case "Hatch":
            console.log("Compra efetuada com sucesso!!!!")
        break;
        case "Sedans":
            console.log("Tem certeza que não prefere outro modelo?")
        break;
        case "motocicletas":
            console.log("Tem certeza que não prefere outro modelo?")
        break;
        case "Caminhonetas":
            console.log("Tem certeza que não prefere outro modelo?")
        break;
        default:
                console.log("Opção inválida")       
            
    }
    
}
comprarcarro("Hatch")
comprarcarro("Sedans")
comprarcarro("motocicletas")
comprarcarro("Caminhonetas")
comprarcarro("Fiat")

