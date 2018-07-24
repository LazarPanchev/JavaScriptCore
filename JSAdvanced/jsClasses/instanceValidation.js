class CheckingAccount{
    constructor(clientId,email,firstName,lastName,products=[]){
        this.clientId=clientId;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
        this.products=products;
    }
    get clientId(){
        return this._clientId;
    }
    set clientId(string){
        let clintPattern=/^[0-9]{6}$/g;
        if(clintPattern.test(string)){
            this._clientId=string;
        }else{
            throw new TypeError('Client ID must be a 6-digit number')
        }
    }
    get email(){
        return this._email;
    }
    set email(string){
        let emailPattern=/^[A-Za-z0-9]+@[A-Za-z.]+$/g;
        if(emailPattern.test(string)){
            this._email=string
        }else {
            throw new TypeError('Invalid e-mail')
        }
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(string){
        let namePattern=/^[A-Za-z]{3,20}$/g;
        if(namePattern.test(string)){
            this._firstName=string;
        }else {
            if(string.length>20 || string.length<3){
                throw new TypeError('First name must be between 3 and 20 characters long')
            }else {
                throw new TypeError('First name must contain only Latin characters');
            }
        }
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(string){
        let namePattern=/^[A-Za-z]{3,20}$/g;
        if(namePattern.test(string)){
            this._lastName=string;
        }else {
            if(string.length>20 || string.length<3){
                throw new TypeError('Last name must be between 3 and 20 characters long')
            }else {
                throw new TypeError('Last name must contain only Latin characters');
            }
        }
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(acc);
let acc1 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
console.log(acc1);
let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
console.log(acc2);
let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
console.log(acc3);