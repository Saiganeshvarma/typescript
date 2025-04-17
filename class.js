var students = /** @class */ (function () {
    function students(name, age, city, isActive) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    return students;
}());
var data = new students("", 10, "", true);
console.log(data);
