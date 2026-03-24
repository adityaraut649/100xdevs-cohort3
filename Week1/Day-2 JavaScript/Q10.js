// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const users = [
    {
        name: "harkirat",
        age: 21,
        gender: "male"
    },
    {
        name: "harshit",
        age: 20,
        gender: "male"
    },
    {
        name: "harsh",
        age: 19,
        gender: "male"
    },
    {
        name: "om",
        age: 18,
        gender: "male"
    }
];

function filterUsers(users) {
    let filteredUsers = users.filter(user => user.age > 18 && user.gender === "male");
    return filteredUsers;
}   

console.log(filterUsers(users));    