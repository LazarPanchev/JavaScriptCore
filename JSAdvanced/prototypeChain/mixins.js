function mixinsFunc() {
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
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
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
    function computerQualityMixin(classToExtend){
        classToExtend.prototype.getQuality=function () {
            return (this.processorSpeed+this.ram+this.hardDiskSpace)/3;
        };
        classToExtend.prototype.isFast=function () {
            return this.processorSpeed>this.ram/4;
        };
        classToExtend.prototype.isRoomy=function () {
            return this.hardDiskSpace>Math.floor(this.ram*this.processorSpeed);
        };
    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet=function () {
            return this.manufacturer===this.keyboard.manufacturer && this.manufacturer===this.monitor.manufacturer;
        };
        classToExtend.prototype.isClassy=function () {
            return this.battery.expectedLife>=3 && (this.color==='Silver' || this.color==='Black')&& (this.weight<3);
        }
    }
    return{
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop,
       computerQualityMixin,
        styleMixin
    }
}
// let computerQualityMixin=mixinsFunc().computerQualityMixin();
// let styleMixin=mixins().styleMixin();
let result=mixinsFunc();
let Battery=result.Battery;
let Keyboard=result.Keyboard;
let Monitor=result.Monitor;
let Computer=result.Computer;
let Laptop=result.Laptop;
let Desktop=result.Desktop;
let mixins = mixinsFunc();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);

let keyboard = new Keyboard('Logitech',70);
let keyboard2 = new Keyboard('A-4',70);
let monitor = new Monitor('Logitech',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
let desktop = new Desktop("Logitech",3.3,8,1,keyboard,monitor);

console.log(desktop.getQuality);
// expect(desktop.getQuality).to.exist;
// expect(laptop.getQuality).to.exist;
// expect(desktop.getQuality()).to.be.closeTo(4.1,0.01,"Expected quaity did not match");
// expect(laptop.getQuality()).to.be.closeTo(2.3,0.01,"Expected quaity did not match");


