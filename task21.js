let obj = { first_name: 'Ivan', last_name: 'Ivanov', email: 'ivanov@pochta.com' };

function formatString(obj) {
    return `${obj.last_name} ${obj.first_name} E-mail: ${obj.email}`;
}

console.log(formatString(obj))
