class students{
    name : string
    age : number
    city : string
    isActive : boolean
    num : number
    constructor(name,age,city,isActive){
        this.name = name
        this.age = age
        this.city = city
    }
}

class newData extends students{
    grade : string
    constructor(name,age,city,isActive){
        super(name,age,city,isActive)
        this.grade = this.grade
    }
}

var data = new newData("",10,"",true,)

console.log(data);

export{}

// for the testing the code