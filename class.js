// // // class Person{
// // //     name : string|number
// // //     age : number|"yes"
// // //     constructor(name,age){
// // //         this.name = name,
// // //         this.age = age
// // //     }
// // // }
// // // class student extends Person{
// // //     grade : number | string
// // //     constructor(name : string, age : number,grade : number|string){
// // //         super(name,age)
// // //         this.grade = grade
// // //     }
// // // }
// // // var details = new student("js",10,10)
// // // details.grade = "yes"
// // // export{}
// // class details{
// //     name : string
// //     city : string
// //     number : number
// //     constructor(name,city,number){
// //         this.name = name
// //         this.city =city
// //         this.number = number
// //     }
// // }
// // var data = new details("","",9)
// // console.log(data);
// class details{
//     name : string
//     age : number
//   readonly city : string
//     constructor(name,age,city){
//         this.name = name
//         this.age = age
//         this.city = city
//     }
// }
// var data = new details("","",34)
var details = /** @class */ (function () {
    function details(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return details;
}());
var data = new details("", 6446);
console.log(data);
