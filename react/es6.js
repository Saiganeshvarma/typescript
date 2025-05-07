// // // var a = true
// // // var b = false
// // // // both conditions need be true
// // // if( a== true && b == true){
// // //     console.log("hello");
// // // }

// // // var a = true
// // // var b = false
// // // // any one condition need to be true

// // // if( a== true || b == true){
// // //     console.log("hello");
// // // }

// // // Template literals

// // // var a = "hello"
// // // var b = "world"
// // // console.log(a + " " + b);
// // // console.log(`${a} and ${b}`);

// // // terinary op

// // // var a = 1
// // // var b = 100

// // // var result = a>b ? "a is the bigger" : "b is the bigget"

// // // console.log(result);

// // // array destructing

// // // var array = [1,2,3,4,5,6,7,8,9,10]
// // // var [a,b,c,d,e,...rest] = array
// // // console.log(rest);
// // // console.log(a);
// // // console.log(b);


// // // var myObj = {
// // //     name : "javascript",
// // //     age : 100
// // // }

// // // var {name,age} = myObj
// // // console.log(name);


// // // var recpie = false

// // // function show1(){
// // //     return "iam the food that u ordered"
// // // }


// // // function show2(){
// // //     return "iam the food that u not ordered"
// // // }

// // // var result = recpie==true?console.log(show1()) : console.log(show2());


// // function add(a = 10 , b = 100){
// //     return a+b
// // }

// // console.log(add(30));

// // 

// var a = [1,2,3,4,5]
// var b = [...a]
// b[0] = "javascript"
// console.log(b);
// console.log(a);

var a = [1,1,1,1,2,3,4,5]
var array = a.find((item)=>{
    return item === 1
})

console.log(array);