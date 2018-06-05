function extractUniqueWords(strArr) {
    let set=new Set();
    let pattern=/[^A-Za-z]+/gm;
    // let wordsArr=strArr.join(' ').toLowerCase().split(pattern).filter(x=>x!=='');
    // for(let i = 0; i < wordsArr.length; i++){
    //     set.add(wordsArr[i]);
    // }
    //
    // console.log(Array.from(set.keys()).join(', '));
    strArr.join(' ').toLowerCase().split(pattern)
        .filter(x=>x!=='')
        .forEach(w=>set.add(w));
    console.log(Array.from(set.keys()).join(', '));

    
}

// extractUniqueWords([
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'Pellentesque quis hendrerit dui.',
//     'Quisque fringilla est urna, vitae efficitur urna vestibulum',
//     'fringilla.',
//     'Vestibulum dolor diam, dignissim quis varius non, fermentum',
//     'non felis.',
//     'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam',
//     'ut.',
//     'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
//     'Integer ac turpis commodo, varius nulla sed, elementum',
//     'lectus.',
//     'Vivamus turpis dui, malesuada ac turpis dapibus, congue',
//     'egestas metus.'
// ]);

extractUniqueWords([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu. Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);