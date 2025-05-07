// // // // import { c } from "vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P"

// // // // // varibles
// // // // var a : number|string|boolean|number[]
// // // // a = 10
// // // // a = "hello"
// // // // a = true
// // // // a = [1,2,3,4,4]

// // // // // functions
// // // // function check(a: number , b : number): boolean | string{
// // // //     if(a>b){
// // // //         return true
// // // //     }else{
// // // //         return "no"
// // // //     }

// // // // }
// // // // // void
// // // // function dontReturn(str : string) : void{
// // // //     console.log("donot return anything");

// // // // }
// // // // dontReturn("")

// // // // // never

// // // // function neverReturn(error : string) : never{
// // // //     throw new Error(error)



// // // // }

// // // // // type aliases

// // // // type User = {
// // // //     name : string | number | boolean,
// // // //     email : string,
// // // //     phoen : number,
// // // //     city : string
// // // // }

// // // // function createUser(user : User){

// // // // }
// // // // createUser({name : 465765,email : "",phoen : 475645, city:""})

// // // // var arr : number[] = [1,2,3,4,5]
// // // // var strArr : string[] = ["sai","ganesh","varma"]
// // // // var arrayWithNumStr : (number|string)[] = ["sai","ganesh",1,2,3,4]
// // // // arrayWithNumStr.map((item)=>{
// // // //     if(typeof(item) == "string"){
// // // //         console.log(`${item} is the string`)
// // // //     }else if(typeof(item) == "number"){
// // // //         console.log(`${item} is the number`);
// // // //     }
// // // // })

// // // // // twodimensioanl array

// // // // var twodArray : (number|string)[][] = [
// // // //     [1,2,3,4,5],
// // // //     [1,2,3,4],
// // // //     ["sai"]
// // // // ]


// // // var a : number | string
// // // a = 10
// // // a = "sai ganesh"

// // // var arr : number[] = [1,2,3,4,5]
// // // var arrStr : string[] = ["sai","ganesh","varma"]
// // // var arrWithNumStr : (number|string)[] = [1,2,3,4,"sai","ganesh","varma"]
// // // arrWithNumStr.map((item)=>{
// // //     if(typeof(item) == "string"){
// // //         return true
// // //     }else if(typeof(item) == "number"){
// // //         return false

// // //     }
// // // })


// // // function check(a : number , b : number) : boolean| string{
// // //     if(a>b){
// // //         return "yes"
// // //     }else{
// // //         return false
// // //     }
// // // }

// // // console.log(check(10,20));

// // // export{}


// // // type user = {
// // //     myname : string,
// // //     city : string,
// // //     age : number

// // // }

// // // function createUser(User : user){

// // // }

// // // console.log(createUser({myname : "",city : "",age : 18}));


// // var userTuple : [string,number]
// // userTuple = ["str",1]
// // console.log(userTuple[0]);
// // console.log(userTuple[1]);
// // userTuple[0] = "str"
// // console.log(userTuple);

// // var optionalTuple : [string,number?]
// // optionalTuple = ["str"]

// // var restTuple : [string,...number[]]
// // restTuple = ["str",1,23,4]

// // var readOnlyTuples : readonly[string,number]
// // readOnlyTuples = ["str",1]
// enum DIRECTIONS  {
//     up = 10,
//     middle ,
//     down,
 
// }

// var myDirections = DIRECTIONS.up
// console.log(myDirections);

// export{}




