import { c } from "vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P"

// varibles
var a : number|string|boolean|number[]
a = 10
a = "hello"
a = true
a = [1,2,3,4,4]

// functions
function check(a: number , b : number): boolean | string{
    if(a>b){
        return true
    }else{
        return "no"
    }

}
// void
function dontReturn(str : string) : void{
    console.log("donot return anything");

}
dontReturn("")

// never

function neverReturn(error : string) : never{
    throw new Error(error)



}

// type aliases

type User = {
    name : string | number | boolean,
    email : string,
    phoen : number,
    city : string
}

function createUser(user : User){

}
createUser({name : 465765,email : "",phoen : 475645, city:""})

var arr : number[] = [1,2,3,4,5]
var strArr : string[] = ["sai","ganesh","varma"]
var arrayWithNumStr : (number|string)[] = ["sai","ganesh",1,2,3,4]
arrayWithNumStr.map((item)=>{
    if(typeof(item) == "string"){
        console.log(`${item} is the string`)
    }else if(typeof(item) == "number"){
        console.log(`${item} is the number`);
    }
})

// twodimensioanl array

var twodArray : (number|string)[][] = [
    [1,2,3,4,5],
    [1,2,3,4],
    ["sai"]
]
