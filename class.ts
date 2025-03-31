

class Person{
    name : string
    age : number|"yes"

    constructor(name,age){
        this.name = name,
        this.age = age

    }
}

class student extends Person{
    grade : number | string
    constructor(name : string, age : number,grade : number|string){
        super(name,age)
        this.grade = grade

    }
}

var details = new student("js",10,10)
details.grade = "yes"
export{}