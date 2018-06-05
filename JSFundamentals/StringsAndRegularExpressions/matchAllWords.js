function matchAllWords(text) {
    let regex=/\b\w+\b/g;
    console.log(text.match(regex).join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords('_(Underscores) are also word characters');