const matrixToArray = (arr) => {
    let result = [];
    arr.forEach(el => {
        result.push(...el);
    });
    return result;
}

console.log(matrixToArray([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));
