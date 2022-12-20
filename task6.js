const users = [{ name: 'Ivan', age: 24 }, { name: 'Oleg', age: 16}, { name: 'Igor', age: 24}];

function getAdult(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18) {
            result.push(arr[i].name);
        }
    }
    return result;
}

console.log(getAdult(users));
