function filterByAge(minAge,firstName,firstAge,secondName, secondAge) {
    let firstPerson={name:firstName, age:firstAge};
    let secondPerson={name:secondName, age:secondAge};
    if(firstPerson.age>=minAge){
        console.log(firstPerson);
    }
    if(secondPerson.age>=minAge){
        console.log(secondPerson);
    }

}

filterByAge(13,'Vanio',12,'Kichka', 45)