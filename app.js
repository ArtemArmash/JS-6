const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 16 }
];

function filterAdults(people) {
    return people.filter(person => person.age >= 18);
}

function getNames(people) {
    return people.map(person => person.name);
}

function findUserByName(people, name) {
    return people.find(person => person.name === name);
}

function areAllAdults(people) {
    return people.every(person => person.age >= 18);
}

function getTotalAge(people) {
    return people.reduce((total, person) => total + person.age, 0);
}

console.log(filterAdults(people));   
console.log(getNames(people));       
console.log(findUserByName(people, 'Charlie'));  
console.log(findUserByName(people, 'Eve'));      
console.log(areAllAdults(people));   
console.log(getTotalAge(people));    
