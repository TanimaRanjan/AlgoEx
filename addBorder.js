const addBorder = (picture) => {
    
    picture.forEach((element, index) =>  picture[index] = (`*${element}*`)) 
    
    picture.unshift('*'.repeat(picture[0].length))
    picture.push('*'.repeat(picture[0].length))
    // return newArray
    return picture
}

console.log(addBorder(["abcd", "defd", "ffgg", 'fghg']))