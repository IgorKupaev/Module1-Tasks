function getObject(str) {
    let url = new URL(str);
    return {protocol: url.protocol, hostname: url.hostname, child: url.pathname}
}

console.log(getObject('https://www.google.com/doodles/rubiks-cube'));