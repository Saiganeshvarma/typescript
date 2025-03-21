// // // // // // // // // // // // // // number
// // // // // // // // // // // // // var a : number = 10
// // // // // // // // // // // // // console.log(a);
// // // // // // // // // // // // // // string

// // // // // // // // // // // // // var b : string = "sai ganesh varma"
// // // // // // // // // // // // // console.log(b);

// // // // // // // // // // // // // // undefined

// // // // // // // // // // // // // var c : undefined
// // // // // // // // // // // // // console.log(c);


// // // // // // // // // // // // // // null

// // // // // // // // // // // // // var d : null = null
// // // // // // // // // // // // // console.log(d);
// // // // // // // // // // // // // // object

// // // // // // // // // // // // // var obj : object = {
// // // // // // // // // // // // //     name : 'sai',

// // // // // // // // // // // // // }
// // // // // // // // // // // // // // array with numbers

// // // // // // // // // // // // // var arr : number[] = [10,20,30,40]
// // // // // // // // // // // // // console.log(arr);

// // // // // // // // // // // // // // array with strings

// // // // // // // // // // // // // var str : string[] = ["a","b","c","d"]
// // // // // // // // // // // // // console.log(str);

// // // // // // // // // // // // // var newStr : Array <string> = ["a","b","c","d"]
// // // // // // // // // // // // // console.log(newStr);

// // // // // // // // // // // // // // any 
// // // // // // // // // // // // // var anyStr : any = "sai"

// // // // // // // // // // // // // var anyNum : any = 10


// // // // // // // // // // // // // var anyObj : any = {
// // // // // // // // // // // // //     name : "sai"
// // // // // // // // // // // // // }

// // // // // // // // // // // // // export{}


// // // // // // // // // // // // function check(a:number,b : number):(string|boolean){
// // // // // // // // // // // //     if(a>b){
// // // // // // // // // // // //         return true
// // // // // // // // // // // //     }else{
// // // // // // // // // // // //         return false
// // // // // // // // // // // //     }

// // // // // // // // // // // // }
// // // // // // // // // // // // export{}
// // // // // // // // // // // // console.log(check(10,10));

// // // // // // // // // // // // var arr : number[] = [1,2,3,4,5]
// // // // // // // // // // // // var arrs : string[] = ["1","2","3","4"]

// // // // // // // // // // // // var arrayNumStr : (string|number)[] = [1,"2","3","4"]

// // // // // // // // // // // var check = (a : number, b :number) : string =>{
// // // // // // // // // // //     if(a>b){
// // // // // // // // // // //         return "yes"
// // // // // // // // // // //     }else{
// // // // // // // // // // //         return "no"
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // console.log(check(10,10));
// // // // // // // // // // // export{}

// // // // // // // // // // var arrayNumStr : (string|number)[] = ["1",2,"3","4","5"]
// // // // // // // // // // arrayNumStr.map((item)=>{
// // // // // // // // // //     if(typeof(item) === "string"){
// // // // // // // // // //         console.log(`${item} is the string`);
// // // // // // // // // //     }else if(typeof(item) == "number"){
// // // // // // // // // //         console.log(`${item} is the number`);
        
// // // // // // // // // //     }
// // // // // // // // // // })

// // // // // // // // // function add(a : number, b : number) : void{
// // // // // // // // //     console.log(a+b)

// // // // // // // // // }
// // // // // // // // // export{}



// // // // // // // // var array : number[] = [1,2,3,4,5]
// // // // // // // // var arrays : string[] = ["sai","ganesh","varma"]

// // // // // // // // var combinedArray : (string|number)[] = ["sai","ganesh",1,2,3,4]
// // // // // // // // combinedArray.map((item)=>{
// // // // // // // //     if(typeof(item) == "string"){
// // // // // // // //         console.log(`${item} is the string`);
// // // // // // // //     }else{
// // // // // // // //         console.log(`${item} is the number`);
// // // // // // // //     }
// // // // // // // // })

// // // // // // // // function check(a : number , b : number) : boolean | string{
// // // // // // // //     if(a>b){
// // // // // // // //         return "yes"
// // // // // // // //     }else{
// // // // // // // //         return false
// // // // // // // //     }
// // // // // // // // }

// // // // // // // function check(str : string) : void{
// // // // // // //     console.log(str);


// // // // // // // }

// // // // // // // export{}

// // // // // // // var str : string|number
// // // // // // // str = "sai"
// // // // // // // str = 10

// // // // // // type User = {
// // // // // //     name : string,
// // // // // //     email : string,
// // // // // //     phone : number
// // // // // // }


// // // // // // function createUser(user : User) : User{
// // // // // //     return {name : "",email : "", phone : 476534756}

// // // // // // }

// // // // // // createUser({name : "",email : "", phone : 476534756})






// // // // //  type dataTypes = {
// // // // //     name : string,
// // // // //     age : number,
// // // // //     phone : number
// // // // //  }

// // // // //  var myUser : dataTypes = {
// // // // //     name : "",
// // // // //     age : 23,
// // // // //     phone : 45
// // // // //  }

// // // // var a : number = 10
// // // // var b : number = 20

// // // // var result : boolean|string
// // // // if(a>b){
// // // //     result = "greater"

// // // // }else{
// // // //      result = false
// // // // }


// // // var arr : (number | string) [][] = [
// // //     [1,2,3,4,5],
// // //     [1,2,3,4,5],
// // //     ["1,2,3,4,5"]
// // // ]




// // // varibles

// // var a : number | string | boolean | number[] = 10

// // a = "sai ganesh"
// // a = true
// // a = [1,2,3,4,5]

// // export{}

// // // arrays

// // var arr : number[] = [1,2,3,4,5]
// // var arrs : string[] = ["sai","ganesh","varma"]

// // var arraywithnumstr : (number|string)[] = ["sai",1,2,3]

// // // functions 
// // function check(a : number , b : number) : boolean | string{
// //     if(a>b){
// //         return true
// //     }else{
// //         return "yes"
// //     }
    
// // }

// // // void

// // function donotReturn(str : string) : void{
// //     console.log("do not return anything");


// // }

// // // never

// // function errorMessage(error : string) : never{
// //     throw new Error(error)

// // }
// // // type alias


// // type User = {
// //     name : string,
// //     age : number,
// //     phone : number
// // }

// // function createUser(user : User){
// //     return 


// // }

// // createUser({name : "",age : 23, phone : 745764})

// // // twodimensionalArray

// // var twoDimensionalArray : (number| string)[][] = [
// //     [1,2,3,4],
// //     ["sai","ganesh","varma"]
// // ]

// // // unions 

// // var c : number | string;
// // c = "346546"

// // type contacts = {
// //     details : string | boolean,
// //     num : number
// // }

// // function createContacts(Contacts : contacts){

// // }
// // createContacts({details : true, num : 3645354})


// enum Status{
//     peding = 1,
//     inprogress = 2,
//     complete = 3

// }

// console.log(Status.complete);


enum userRole {
    admin = "admin",
    guest = "guest",
    user = "ganesh",

}



function getPermission(role : userRole) {
    if(role == userRole.admin){
        return "full access"
    }else if(role == userRole.guest){
        return "limited access"
    }else if(role == userRole.user){
        return "access secured"
    }
}

console.log(getPermission(userRole.admin));



