const user = {
    id: 123,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    password: 'Mypwd!23',
    age: 13   
}

const {id, first_name, last_name, age} = user;
const userClone = {id, first_name, last_name, age};

console.log(userClone);
