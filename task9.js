const users = [{ name: 'Ivan', age: 24 }, { name: 'Oleg', age: 16}, { name: 'Igor', age: 24}];

function getMinMaxAge (users) {
    if (users.length === 0) {
        return {min: 0, max: 0};
    }
    return {
        min: users.sort((a, b) => a.age - b.age)[0].age,
        max: users.sort((a, b) => b.age - a.age)[0].age
    };
}

console.log(getMinMaxAge(users));
