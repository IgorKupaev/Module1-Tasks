const users = [{ name: 'Ivan', age: 24 }, { name: 'Oleg', age: 16}, { name: 'Igor', age: 24}];

function getTotalAge(users) {
    let result = 0;
    for (let user of users) {
        result += user.age;
    }
    return result
}

console.log(getTotalAge(users));
