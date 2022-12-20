const arr = [{a: 5, b: 3, c: 4}, {a: 1, b: 3, c: 4}, {a: 4, b: 7, c: 4}, {a: 2, b: 2, c: 3}];

function getPerimeter(arr) {
    return arr.map(item => {
        let result = item.a + item.b + item.c;
        return {p: result}
    })
};

console.log(getPerimeter(arr));
