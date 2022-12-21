const arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6];

function getByEvenIndices(arr) {
    return arr.filter((el, index) => index % 2 === 0)
}

console.log(getByEvenIndices(arr));
