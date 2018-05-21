function composeTag(arr) {
    let fileLocation=arr[0];
    let alternatetext=arr[1];
    console.log(`<img src="${fileLocation}" alt="${alternatetext}">`);

}

composeTag(['smiley.gif', 'Smiley Face']);
composeTag(['monkey.gif', 'Monkey Face']);