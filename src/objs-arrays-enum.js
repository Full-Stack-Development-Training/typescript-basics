"use strict";
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
const person = {
    name: 'Max',
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, 'author']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Max',
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.AUTHOR
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log("Is author");
}
//# sourceMappingURL=objs-arrays-enum.js.map