const people = [
    { name: 'Tran Vuong Duy', birthYear: 2003, passedYear: -1 },
    { name: 'Nguyen Dinh Anh', birthYear: 2003, passedYear: 2005 },
    { name: 'Le Nguyen Bao Ngoc', birthYear: 2004, passedYear: 2007 },
    { name: 'Tran Anh Ngoc', birthYear: 2003, passedYear: -1 },
    { name: 'Nguyen Van A', birthYear: 2003, passedYear: 2014 },
    { name: 'Nguyen Van B', birthYear: 2001, passedYear: -1 },
    { name: 'Nguyen Van C', birthYear: 2007, passedYear: 2023 },
];

function getAge(birthYear, passedYear) {
    if (passedYear != -1) {
        return passedYear - birthYear;
    } else {
        const now = new Date(Date.now());
        return now.getYear() - birthYear;
    }
}

function getOldest(peple) {
    let oldestPerson = people[0];
    people.forEach((person) => {
        const age = getAge(person.birthYear, person.passedYear);
        const oldestAge = getAge(oldestPerson.birthYear, oldestPerson.passedYear);
        if (age > oldestAge) {
            oldestPerson = person;
        }
    })
    return oldestPerson;
}

console.log(getOldest()); 