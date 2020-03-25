function xorQueries(arr, queries) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ^ arr[i - 1]
        console.log(arr)
    };
    let result = []
    for (let i = 0; i < queries.length; i++) {
        result[i] = arr[queries[i][1]] ^ arr[queries[i][0] - 1]
        console.log(result)
    };
    return result
};
