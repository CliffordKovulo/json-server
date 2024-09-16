var student = {
    name: 'David Ray',
    sclass: 'V1',
    rollNo: 12
}

function listproperties (obj) {
    return Object(obj);
}

console.log(listproperties(student));