const user = {
    id: 123,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    password: 'Mypwd!23',
    age: 13   
}

let [firstName, lastName] = [user.first_name, user.last_name];
console.log(firstName, lastName);
