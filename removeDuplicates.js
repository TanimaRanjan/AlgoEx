
function removeDuplicates(array) {
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
