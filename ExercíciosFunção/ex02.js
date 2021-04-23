function ctriangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3) {
        return 'Equilátero'
    } else if(l1 == l2 || l2 == l3 || l1 == l3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}
console.log(ctriangulo(2, 2, 2));
console.log(ctriangulo(3, 3, 3));
console.log(ctriangulo(3, 3, 3));
