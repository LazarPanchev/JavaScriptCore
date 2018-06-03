function findOccurences(sentence,word) {
   // word='\\b'+word+'\\b';
    let regex=new RegExp(`\\b${word}\\b`,'gi');
    let result=sentence.match(regex);
    if(result){
        console.log(result.length);
    }else{
        console.log(0);
    }
}

findOccurences('The waterfall was so high, that the child couldn’t see its peak.',
    'chocho');
findOccurences('The waterfall was so high, that the child couldn’t see its peak.',
    'the');
findOccurences('How do you plan on achieving that? How? How can you even think of that?',
    'how');
findOccurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there');