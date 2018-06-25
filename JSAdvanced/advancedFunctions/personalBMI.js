function personalBMI(name, age, weight, height) {
    let currObj= {
        name: name,
        personalInfo:{
            age: age,
            weight:weight,
            height: height
        },
        BMI:getBMI(),
        status:getStatus(),
    };

    function getBMI() {
        return Math.round(weight/Math.pow((height/100),2));
    }

    function getStatus() {
        let currBMI=getBMI();
        if(currBMI<18.5){
            return 'underweight'
        }else if(currBMI<25){
            return 'normal'
        }else if(currBMI<30){
            return 'overweight'
        }else {
            return 'obese'
        }
    }

    if(currObj['status']==='obese'){
        currObj['recommendation']='admission required'
    }
    return currObj;

}

console.log(personalBMI('Peter', 29, 75, 182));
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));