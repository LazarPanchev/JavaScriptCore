function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject
        }
    }
    return{
        Person,
        Teacher
    }
}

let Person=personAndTeacher().Person;
let Teacher=personAndTeacher().Teacher;
let firstPerson=new Person('Ivo','iva@abv.bg');
let firstTeacher=new Teacher('Kenov','keno@abv.bg','C#');
console.log(firstPerson);
console.log(firstTeacher);
