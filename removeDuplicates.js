
/* Remove duplicates from input array */ 

function removeDuplicates(array) {

    console.log("Remove duplicates from array - ")
    var arr1 = [];
    var arrList = {};
    array.forEach(num => {
        if (!arrList[num]) {
            arr1.push(num);
            arrList[num] = true;
        }
    });
    console.log(arr1);
}

removeDuplicates([1,3,3,3,1,5,6,7,8,1]);

