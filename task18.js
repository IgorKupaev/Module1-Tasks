let name = 'Иванов Пётр Андреевич';

function formatName(str) {
    let arr = str.split(" ");
    return {first_name: arr[1], last_name: arr[0], patronymic_name: arr[2]};
}

console.log(formatName(name));
