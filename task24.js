const arr = [1, 632, 123, 84, 12, 8, 87, 29, 51, 0];

function sortArray(arr, action) {
    switch (action) {
        case 'ASC':
            return arr.sort((a, b) => a - b);
            break;
        case 'DESC':
            return arr.sort((a, b) => b - a);
            break;
        case 'NOT SORT':
            return arr;
            break;
        default:
            return -1;
            break;
    }
}

console.log(sortArray(arr, 'ASC'));
