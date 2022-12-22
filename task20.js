function getObject(str) {
    const protocol = str.split('://')[0];
    const pathNames = str.split('://')[1].split('/');
    const host = pathNames.shift();
    return {protocol, host, pathNames}
}

console.log(getObject('https://www.google.com/doodles/rubiks-cube'));