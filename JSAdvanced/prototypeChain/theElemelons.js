function theElemelons() {
    class Melon{
        constructor(weight,melonSort){
            if(new.target===Melon){
                throw new TypeError('Melon is abstract class!');
            }
            this.weight=Number(weight);
            this.melonSort=melonSort;
            this._elementIndex=this.weight*this.melonSort.length;
            this.element='';
        }
        get elementIndex(){
            return this._elementIndex;
        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element='Water';
        }

    }
    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element='Fire';
        }
        get elementIndex(){
            return this.weight*this.melonSort.length;
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element='Earth';
        }
    }
    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element='Air';
        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element='Water';
            this.elementArr=['Fire','Earth','Air','Water',];
        }
        morph(){
            let currElement=this.elementArr.shift();
            this.element=currElement;
            this.elementArr.push(currElement);
        }
    }
    return{
        Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon
    }
}

let result=theElemelons();
let Melon=result.Melon;
let Watermelon=result.Watermelon;
let Firemelon=result.Firemelon;
let Earthmelon=result.Earthmelon;
let Airmelon=result.Airmelon;
let Melolemonmelon=result.Melolemonmelon;
// let waterMelon=new Watermelon(2,'Sweet');
// console.log(waterMelon.elementIndex);
//let test=new Melon(100,'Test');
// let watermelon=new Watermelon(12.5,'Kingsize');
// console.log(watermelon.toString());
let melolemonmelon=new Melolemonmelon(2.2,'Kingsize');
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
