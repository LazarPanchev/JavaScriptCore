function captureTheNumbers(arr){
    let regex=/[\d]+/g;
    let result=[];
    for(let i = 0; i < arr.length; i++){
        let matchesArr=regex.exec(arr[i]);
        while(matchesArr!==null) {
            result.push(matchesArr[0]);
            matchesArr=regex.exec(arr[i]);
        }
    }
    console.log(result.join(' '));
}
captureTheNumbers(
    [
        'The300',
        'What is that?',
        'I think it’s the 3rd movie.',
        'Lets watch it at 22:45'
]
);
captureTheNumbers(
    [
        '123a456',
        '789b987',
        '654c321',
        '0'
    ]
);