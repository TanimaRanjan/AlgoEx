const binary = (decimal) => {

    let binary = ''
    let binary2 = ''
    while(decimal>0) {
       // console.log(decimal%2)
        binary = binary*10 + decimal%2
        binary2 = decimal%2 + binary2
       // console.log(binary, binary2)
        decimal = Math.floor(decimal/2)
       // console.log(decimal)
    }
    
    console.log(binary, binary2)

}
binary(1)
binary(5)
binary(10)
binary(100)
