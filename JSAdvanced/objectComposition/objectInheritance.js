function cars(arr) {
    let carsClosureObj = (function () {
        let resultObjs = {};
        function createPrint(command, name) {
            if (command === 'create') {
                resultObjs[name] = {};
            } else {
                let resultArr = [];
                let innerObj = resultObjs[name];
                for (let ind in innerObj) {
                    resultArr.push(`${ind}:${innerObj[ind]}`)
                }
                console.log(resultArr.join(', '));
            }
        }
        function createSet(parOne, parTwo, parThree, parFour) {
            if (parOne === 'create') {
                resultObjs[parTwo] = Object.create(resultObjs[parFour]);
            } else {
                resultObjs[parTwo][parThree] = parFour;
            }
        }
        return {
            createPrint,
            createSet
        }
    })();
    for (let line of arr) {
        let tokens = line.split(' ');
        if (tokens.length === 2) {
            carsClosureObj['createPrint'](tokens[0], tokens[1]);
        } else {
            carsClosureObj['createSet'](tokens[0], tokens[1], tokens[2], tokens[3]);
        }
    }
}

// cars([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ]);
let commands = ['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'];
cars(commands);
