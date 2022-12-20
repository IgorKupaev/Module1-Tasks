const arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6];

function getByEvenIndices(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        i % 2 !== 0 || result.push(arr[i]);
    }
    return result
}

console.log(getByEvenIndices(arr));
