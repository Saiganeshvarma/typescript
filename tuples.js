// // creating the tuples
// var tuple : [number,string,...number[]]
// tuple = [12,"str,",1,2,3,4,5,6]
// tuple[0] = 12
// enums
var direction;
(function (direction) {
    direction[direction["east"] = 10] = "east";
    direction["west"] = "yes";
    direction[direction["north"] = 20] = "north";
    direction["south"] = "no";
})(direction || (direction = {}));
var myDirection = direction;
console.log(myDirection[20]);
// enum role {
//     admin = 10,
//     user = 20,
//     guest = 30
// }
// var myRole = role.admin
// console.log(myRole);
// enum userDetails {
//     active = "no",
//     track = "yes"
// }
// var myUser = userDetails.active
// console.log(myUser);
