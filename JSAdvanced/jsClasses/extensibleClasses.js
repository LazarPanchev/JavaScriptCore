let extensibleClass=(function () {
    let id=0;
    return class Extensible{
        constructor(){
            this.id=id++;
        }
        extend(template) {
            for (let prop in template) {
                if (typeof template[prop]==='function') {
                    Extensible.prototype[prop] = template[prop];
                } else {
                   this[prop] = template[prop]; //put a new property in the current object
                }
            }
        }
    };

})();

let obj1= new extensibleClass();
let obj2= new extensibleClass();
let obj3= new extensibleClass();
obj1.extend({
    extensionMethod: function () {
        console.log('Hi');
    },
    extensionProperty: 'Somestring'
});
console.log(obj1);
console.log(extensibleClass.prototype);