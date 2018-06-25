let solution=(function(){
    let robot={
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0
    };
    
    return function (input) {
        let recipes={
            apple:{
                carbohydrate:1,
                flavour:2
            },
            coke:{
                carbohydrate:10,
                flavour:20
            },
            burger:{
                carbohydrate:5,
                fat:7,
                flavour:3
            },
            omelet:{
                protein:5,
                fat:1,
                flavour:1
            },
            cheverme:{
                protein:10,
                carbohydrate:10,
                fat:10,
                flavour:10
            }
        };
        let tokens=input.split(' ');
        let command=tokens[0];
        if(command==='restock'){
                let microelement=tokens[1];
                robot[microelement]+=Number(tokens[2]);
                return 'Success';
        }else if(command==='prepare'){
                let recipe=tokens[1];
                let quantity=Number(tokens[2]);
                let ingredientsObj=recipes[recipe];
                for(let ing in ingredientsObj){
                    if(robot[ing]<ingredientsObj[ing]*quantity){
                        return(`Error: not enough ${ing} in stock`);
                    }
                }
                for(let ing in ingredientsObj){
                    robot[ing]-=ingredientsObj[ing]*quantity;
                }
                return 'Success'

        }else if(command==='report'){
                return(`protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`);
        }
    }


})();

let manager=solution;
console.log(solution('restock carbohydrate 10'));
console.log(solution('restock flavour 10'));
console.log(solution('prepare apple 1'));
console.log(solution('restock fat 10'));
console.log(solution('prepare burger 1'));
console.log(solution('report'));
// console.log(solution('prepare cheverme 1'));
// console.log(solution('restock protein 10'));
// console.log(solution('prepare cheverme 1'));
// console.log(solution('restock carbohydrate 10'));
// console.log(solution('prepare cheverme 1'));
// console.log(solution('restock fat 10'));
// console.log(solution('prepare cheverme 1'));
// console.log(solution('restock flavour 10'));
// console.log(solution('prepare cheverme 1'));
// console.log(solution('report'));




