
// // creating the tuples

// var tuple : [number,string,...number[]]
// tuple = [12,"str,",1,2,3,4,5,6]
// tuple[0] = 12


// enums

// enum direction {
//     east = 10 ,
//     west = "yes",
//     north = 20,
//     south = "no"
// }

// var myDirection = direction
// console.log(myDirection[20]);

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


type userDetails = {
    name : string,
    age : number,
    city : string,
    isActive : boolean
}


var myObj : userDetails = {
    name : "",
    age : 20,
    city : "",
    isActive : true
}

export{}

