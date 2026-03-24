// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user) {
    console.log(`Hi ${user.gender} ${user.name}, your age is ${user.age}`);
}

const user = {
    name: "harkirat",
    age: 21,
    gender: "Mr"
};

greet(user);
