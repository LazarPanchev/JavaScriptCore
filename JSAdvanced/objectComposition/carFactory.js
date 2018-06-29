function carFactory(car) {
    let newCar={};
    newCar.model=car.model;
    let smallEngine= {
        power: 90, volume: 1800
    };
    let normalEngine= {
        power: 120, volume: 2400
    };
    let monsterEngine= {
        power: 200, volume: 3500
    };
    let stockCarriage= {
        type: `${car.carriage}`,
        color: `${car.color}`};
    let requiredEngine=car.power;
    let requiredWheelsize=car.wheelsize;

    if(requiredEngine<=smallEngine.power){
        newCar.engine=smallEngine
    }else if(requiredEngine<=normalEngine.power){
        newCar.engine=normalEngine
    }else {
        newCar.engine=monsterEngine;
    }

    newCar.carriage=stockCarriage;
    requiredWheelsize%2===0 ? requiredWheelsize-=1: requiredWheelsize;
    newCar.wheels=[requiredWheelsize,requiredWheelsize,requiredWheelsize,requiredWheelsize]
    return newCar;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));