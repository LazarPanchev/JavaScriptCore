function solution() {
    return {
        extend: function extendFunc (templateObj) {
            let propertiesArr = Object.getOwnPropertyNames(templateObj);
            for (let i = 0; i < propertiesArr.length; i++) {
                if (isFunction(templateObj[propertiesArr[i]])) {
                    let parent = Object.getPrototypeOf(templateObj);
                    parent[propertiesArr[i]] = templateObj[propertiesArr[i]];
                } else {
                    this[propertiesArr[i]] = templateObj[propertiesArr[i]]; //put a new property in the current object
                }
            } 
            function isFunction(functionToCheck) {
                return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
            }
        }
        };
}

console.log(solution({
    extensionMethod: function () {
        console.log('I am extensionMethod function');
    },
    extensionProperty: 'I am Property'
}));