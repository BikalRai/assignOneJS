"use strict";

const arr = [
    "Hello",
    "World",
    [1, [2, 4, 5], 3],
    true,
    33.9,
    69,
    { name: "Tim", age: 44 },
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[2][1]);
console.log(arr[2][1][2]);
console.log(arr[6]["age"]);
console.log(arr[6].name);

const person = {
    name: "Rick",
    age: 12,
    isOfLegalAge: false,
    friends: ["Tom", "Dick", `Harry`],
    likes: {
        sci: "Science",
        exp: "Explore",
    },

    info: function () {
        return `${this.name} loves ${this.likes["sci"]}, ${this.likes.exp}, and has ${this.friends.length} who are named ${this.friends[0]}, ${this.friends[1]} and ${this.friends[2]}`;
    },
};

console.log(person.name);
console.log(person.age);
console.log(person["isOfLegalAge"]);
console.log(person["friends"]);
console.log(person.likes);
console.log(person["info"]());
