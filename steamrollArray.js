/* Flatten a nested array */


const steamrollArray = (array) => {
    const oneArray = []

    flatten(array);

    function flatten(array) {
        array.forEach(element => {
            if(Array.isArray(element))   {
                flatten(element)
            } else {
                oneArray.push(element);
            }
        });
    }

    return oneArray;
}

console.log(steamrollArray([[['a']], [['b']]]));
console.log(steamrollArray([1, [2], [3,[[4]]]]));