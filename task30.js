const user = {
    id: 123,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    password: 'Mypwd!23',
    age: 13   
}

let userClone = {...user};
delete userClone.password;
console.log(userClone);
