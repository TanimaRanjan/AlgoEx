function reverseCase(str) {
    let temp = str.toString().split('')
    
    temp =str.toString().split('').map(element => element.charCodeAt()<97 ?  element.toLowerCase() : element.toUpperCase()).join('')

    console.log(str, temp)

    
}
reverseCase("Happy Birthday") //➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") //➞ "many thanks"

reverseCase("sPoNtAnEoUs")// ➞ "SpOnTaNeOuS"