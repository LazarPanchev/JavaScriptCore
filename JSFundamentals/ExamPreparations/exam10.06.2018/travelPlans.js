function travelPlans(strArr) {
    let totalGold=0;
    let countSpecialized=0;
    let countAverage=0;
    let countClumsy=0;
    let specialized=['Programming', 'Hardware maintenance', 'Cooking',
        'Translating', 'Designing'];
    let average=['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy=['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting',
        'Writing', 'Lecturing', 'Modeling', 'Nursing'];
    for(let i = 0; i < strArr.length; i++){
        let currentGold=0;
        let [profession, goldOffer]=strArr[i].split(' : ');
        goldOffer=Number(goldOffer);
        if(specialized.includes(profession)){
            if(goldOffer>=200){
                countSpecialized++;
                currentGold=goldOffer-(goldOffer*0.2);
                if(countSpecialized%2===0){
                    currentGold+=200;
                }
            }
        }else if(clumsy.includes(profession)) {
            countClumsy++;
            if (countClumsy % 2 === 0) {
                currentGold = goldOffer - (goldOffer * 0.05);
            } else if (countClumsy % 3 === 0) {
                currentGold = goldOffer - (goldOffer * 0.1);
            } else {
                currentGold = goldOffer;
            }
        }else {
            currentGold=goldOffer;
        }

        totalGold+=currentGold;
    }

    if(totalGold<1000){
        console.log(`Final sum: ${(totalGold).toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000-totalGold).toFixed(2)} gold more to continue in the next task.`);
    }else {
        console.log(`Final sum: ${(totalGold).toFixed(2)}`);
        console.log(`Mariyka earned ${(totalGold-1000).toFixed(2)} gold more.`);
    }
}

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(['Programming : 500', 'Driving : 243.55', 'Acting : 200', 'Singing : 100',
    'Cooking : 199', 'Hardware maintenance : 800', 'Gardening : 700', 'Programming : 500']);