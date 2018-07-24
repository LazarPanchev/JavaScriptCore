function personTeacherStudent() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
        toString(){
            return`${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject
        }
        toString(){
            let parentToString=super.toString().slice(0,-1);
            return parentToString+`, subject: ${this.subject})`
        }
    }
    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course=course;
        }
        toString(){
            let parentToString=super.toString().slice(0,-1);
            return parentToString+`, course: ${this.course})`
        }
    }
    return{
        Person,
        Teacher,
        Student
    }
}

let Person=personTeacherStudent().Person;
let Teacher=personTeacherStudent().Teacher;
let Student=personTeacherStudent().Student;
let person=new Person('Petur','petio@abv.bg')
let teacher=new Teacher('g-ca Ivanova','ivanova@abv.bg','ancientHistory');
let student=new Student('Gosho','gogo@yahoo.com','second')
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());

