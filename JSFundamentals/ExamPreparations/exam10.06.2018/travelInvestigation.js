function travelInvestigation(strArr) {
    let delimiter = strArr[1];
    let companies = strArr[0].split(delimiter).filter(x=>x!=='');
    let text = strArr.slice(2);
    let validSentences=[];
    let invalidSentences=[];

    for(let i = 0; i < text.length; i++){
        let currSentence=text[i];
        currSentence=currSentence.toLowerCase();
        let counter=0;
        for(let i = 0; i < companies.length; i++){
            let currCompany=companies[i];
            if(currSentence.includes(currCompany)){
                counter++;
            }
        }
        if(counter===companies.length){
            validSentences.push(currSentence)
        }else {
            invalidSentences.push(currSentence);
        }
    }

    if(validSentences.length>0){
        console.log('ValidSentences');
        for(let i = 0; i < validSentences.length; i++){
            console.log(`${i+1}. ${validSentences[i]}`);
        }
    }
    if(validSentences.length>0 && invalidSentences.length>0){
        console.log('='.repeat(30));
    }
    if(invalidSentences.length>0){
        console.log('InvalidSentences');
        for(let i = 0; i < invalidSentences.length; i++){
            console.log(`${i+1}. ${invalidSentences[i]}`);
        }
    }

}
//
// travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@, ",
//     "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//     "someone continues as no "]
// );

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);