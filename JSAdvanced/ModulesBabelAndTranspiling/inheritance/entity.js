class Entity{
    constructor(name){
        if(new.target===Entity){
            throw new TypeError('Forbidden initialization. Entity is abstract!')
        }
        this.name=name;
    }
}

module.exports=Entity;