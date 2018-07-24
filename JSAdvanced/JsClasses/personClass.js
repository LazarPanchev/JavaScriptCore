class Person{
    constructor(firstName, lastName,age, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person=new Person('Maria','Petrova', 22, 'mp@yahoo.com');
console.log(person.toString());
let p=new Person('Peter','Marinov',18,'pesho18@abv.bg');
console.log(p.lastName);