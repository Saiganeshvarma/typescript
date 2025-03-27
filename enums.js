"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direction;
(function (direction) {
    direction[direction["east"] = 10] = "east";
    direction["west"] = "yes";
    direction[direction["north"] = 20] = "north";
    direction["south"] = "no";
})(direction || (direction = {}));
var myDirection = direction;
console.log(myDirection[20]);
var role;
(function (role) {
    role[role["admin"] = 10] = "admin";
    role[role["user"] = 20] = "user";
    role[role["guest"] = 30] = "guest";
})(role || (role = {}));
var myRole = role.admin;
console.log(myRole);
var userDetails;
(function (userDetails) {
    userDetails["active"] = "no";
    userDetails["track"] = "yes";
})(userDetails || (userDetails = {}));
var myUser = userDetails.active;
console.log(myUser);
