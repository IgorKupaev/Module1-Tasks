let email = 'ivanov.oleg@pochta.com';

function splitEmail(str) {
    let arr = str.split('@');
    return {username: arr[0], domain: arr[1]};
}

console.log(splitEmail(email))
