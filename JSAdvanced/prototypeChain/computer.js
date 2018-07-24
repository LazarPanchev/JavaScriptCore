function computerFunc(){
    class Keyboard{
        constructor(manufacturer,responseTime){
            this.manufacturer=manufacturer;
            this.responseTime=responseTime;
        }
    }
    class Monitor{
        constructor(manufacturer,width,height){
            this.manufacturer=manufacturer;
            this.width=width;
            this.height=height;
        }
    }
    class Battery{
        constructor(manufacturer,expectedLife){
            this.manufacturer=manufacturer;
            this.expectedLife=expectedLife;
        }
    }
    class Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace){
            if(new.target===Computer){
                throw new TypeError('Forbidden initialization. Computer is abstract class!')
            }
            this.manufacturer=manufacturer;
            this.processorSpeed=processorSpeed;
            this.ram=ram;
            this.hardDiskSpace=hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,weight,color,battery){
            super(manufacturer,processorSpeed,ram,hardDiskSpace)
            this.weight=weight;
            this.color=color;
            this.battery=battery;
        }
        get battery(){
            return this._battery;
        }
        set battery(battery){
            if(battery instanceof Battery){
                this._battery=battery
            }else {
                throw new TypeError('Incorrect type of argument!')
            }
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,keyboard,monitor){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.keyboard=keyboard;
            this.monitor=monitor;
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(keyboard){
            if(keyboard instanceof Keyboard){
                this._keyboard=keyboard
            }else {
                throw new TypeError('Incorrect type of argument!');
            }
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(monitor){
            if(monitor instanceof Monitor){
                this._monitor=monitor;
            }else {
                throw new TypeError('Incorrect type of argument!')
            }
        }

    }
    return{
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
// let result=computerFunc();
// let Battery=result.Battery;
// let Keyboard=result.Keyboard;
// let Monitor=result.Monitor;
// let Computer=result.Computer;
// let Laptop=result.Laptop;
// let Desktop=result.Desktop;
// let computer=new Computer('HP',2.2,2,80);
// console.log(computer);
let classes = computerFunc();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
// expect(()=>new Computer("Most Computers",2,8,1.5)).to.throw(Error);

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let battery = new Battery('Energy',3);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
//laptop.battery = "pesho";
// expect(()=>laptop.battery = "pesho").to.throw(TypeError);
// expect(()=>desktop.keyboard = "gosho").to.throw(TypeError);
// expect(()=>desktop.monitor = "stamat").to.throw(TypeError);

keyboard.manufacturer = "Ha";
// expect(desktop.keyboard.manufacturer).to.equal('Ha',"Keyboard getter did not work.");
monitor.manufacturer = "Ho";
// expect(desktop.monitor.manufacturer).to.equal('Ho',"Keyboard getter did not work.");
battery.manufacturer = "Hi";
// expect(laptop.battery.manufacturer).to.equal('Hi',"Keyboard getter did not work.");