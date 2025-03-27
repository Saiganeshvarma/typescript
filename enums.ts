enum direction {
    east = 10 ,
    west = "yes",
    north = 20,
    south = "no"
}

var myDirection = direction
console.log(myDirection[20]);

enum role {
    admin = 10,
    user = 20,
    guest = 30
}

var myRole = role.admin
console.log(myRole);

enum userDetails {
    active = "no",
    track = "yes"
}
var myUser = userDetails.active
console.log(myUser)

export{}