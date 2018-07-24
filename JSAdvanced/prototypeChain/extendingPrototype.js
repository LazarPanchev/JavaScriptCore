function extendingClass(classToExtend) {
    classToExtend.prototype.species='Human';
    classToExtend.prototype.toSpeciesString=function () {
        return `I am a ${this.species}. `+ this.toString();
    };
}
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
        super(name,email)
        this.subject=subject;
    }
}

let t=new Teacher('Pesho','test@abv.bg','JS')
extendingClass(Teacher)
console.log(t.species);
console.log(t.toSpeciesString());
