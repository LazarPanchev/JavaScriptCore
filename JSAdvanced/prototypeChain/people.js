function people() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new TypeError('Employee is abstract');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(` is working on a simple task.`);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(` is working on a complicated task.`);
            this.tasks.push(` is taking time off work.`);
            this.tasks.push(` is supervising junior workers.`);

        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name,age);
            this.dividend = 0;
            this.tasks.push(` scheduled a meeting.`);
            this.tasks.push(` is preparing a quarterly report.`);
        }
        getSalary(){
            return this.salary + this.dividend;
        }
    }

    return {Employee,
        Junior,
        Senior,
        Manager
    }
}
let result=people();
let Junior=result.Junior;
let Senior=result.Senior;
let Manager=result.Manager;

let guy1 = new Junior('pesho', 20);
let guy2 = new Senior('gosho', 21);
let guy3 = new Manager('ivan', 22);

console.log(guy1.name);
guy1.salary=1200;
guy1.collectSalary();
guy2.collectSalary();
guy3.getSalary();
console.log(guy3.tasks);
guy2.work();
guy3.work();
