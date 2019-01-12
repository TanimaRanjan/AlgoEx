//Hamming Distance 
/*
the Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols 
are different. In other words, it measures the minimum number of substitutions required to change one string into the 
other, or the minimum number of errors that could have transformed one string into the other. In a more general context,
 the Hamming distance is one of several string metrics for measuring the edit distance between two sequences.
*/

function hammingDistance(string1, string2) {
    arr1 = string1.split('')
    arr2 = string2.split('')
    console.log(`Calculate Hamming Distance between ${string1} and ${string2}`)
    count = 0
        if(string1.length !== string2.length) {
            console.log('The Strings are not the same length. ')
        } else {
            for(i=0;i<string1.length; i++) {
                if(arr1[i] !== arr2[i]){
                    count ++
                } 
            }
            console.log(`Count is ${count}`)
        }
        
}

hammingDistance('aaa', 'adfgddfd')

hammingDistance('aaa', 'abc')

hammingDistance('tanima', 'tamina')

hammingDistance('1011101', '1001001')

hammingDistance('karolin', 'kathrin')
