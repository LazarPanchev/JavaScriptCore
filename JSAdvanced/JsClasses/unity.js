class Rat{
    constructor(name){
        this.name=name;
        this.unitedRats=[];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.unitedRats.push(otherRat)
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let result=this.name+'\n';
        for(let rat of this.unitedRats){
            result+=`##${rat.name}`;
        }

        return result.trim()
    }
}

let test=new Rat('Pesho');
console.log(test.toString());
console.log(test.getRats());
test.unite(new Rat('Gosho'));
test.unite(new Rat('Sasho'));
console.log(test.getRats());

console.log(test.toString());
