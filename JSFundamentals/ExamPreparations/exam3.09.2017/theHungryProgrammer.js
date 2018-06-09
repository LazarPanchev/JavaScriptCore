function theHungryProgrammer(meals, commands) {
    let eathenMeals = 0;
    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(' ');
        if (tokens[0] === "End") {
            break;
        }
        if (tokens.length === 1) {
            switch (tokens[0]) {
                case 'Serve':
                    if (meals.length < 1) {
                        break;
                    }
                    let lastMeal = meals.pop();
                    console.log(`${lastMeal} served!`);
                    break;
                case 'Eat':
                    if (meals.length > 0) {
                        let firstMeal = meals.shift();
                        console.log(`${firstMeal} eaten`);
                        eathenMeals++;
                    }
                    break;
                default:
                    break;
            }

        } else if (tokens.length === 2) {
            switch (tokens[0]) {
                case 'Add':
                    meals.unshift(tokens[1]);
                    break;
                default:
                    break;
            }
        } else if (tokens.length === 3) {
            switch (tokens[0]) {
                case 'Shift':
                    let firstIndex = Number(tokens[1]);
                    let secondIndex = Number(tokens[2]);
                    if (isValidIndexes(firstIndex, secondIndex, meals)) {
                        let temp = meals[firstIndex];
                        meals[firstIndex] = meals[secondIndex];
                        meals[secondIndex] = temp;
                    }
                    break;
                case 'Consume':                   //check
                    let startIndex = Number(tokens[1]);
                    let endIndex = Number(tokens[2]);
                    if (isValidIndexes(startIndex, endIndex, meals)) {
                        let countIndex = (endIndex - startIndex) + 1;//+1
                        meals.splice(startIndex, countIndex);//+1);
                        console.log('Burp!');
                        eathenMeals += countIndex;// + 1;

                    }
                    break;
                default:
                    break;
            }
        }
    }
    if (meals.length > 0) {
        console.log('Meals left: ' + meals.join(', '));
    } else {
        console.log('The food is gone');
    }

    console.log('Meals eaten: ' + eathenMeals);

    function isValidIndexes(index1, index2, arr) {   //check
        if ((index1 >= 0) && (index1 < arr.length)) {
            if ((index2 >=index1) && (index2 < arr.length)) {
                return true;
            }
        }
        return false;
    }
}
theHungryProgrammer(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']);