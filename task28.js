const user = {
    id: 123,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    password: 'Mypwd!23',
    age: 13   
}

const updates = {
    age: 14,
    password: 'helloWorld'
}

function getChangedUser(user, changedUser) {
    return {
        id: changedUser.id ?? user.id,
        first_name: changedUser.first_name ?? user.first_name,
        last_name: changedUser.last_name ?? user.last_name,
        password: changedUser.password ?? user.password,
        age: changedUser.age ?? user.age
    
    };
}

console.log(getChangedUser(user, updates))
