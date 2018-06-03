function secretData(arr) {
    let clientNameRegex=/(\*[A-Z][A-Za-z]*)(?=\s|\t|$|\n)/g;
    let phoneNumberRegex =/(\+[\d\-]{10})(?=\s|\t|$)/g;
    let idRegex=/(![A-Za-z0-9]+)(?=\s|\t|$)/g;
    let secretBaseRegex=/(_[A-Za-z0-9]+)(?=\s|\t|$)/g;
    let text=arr.join('\n');
    text=text.replace(clientNameRegex,replacer);
    text=text.replace(phoneNumberRegex,replacer);
    text=text.replace(idRegex,replacer);
    text=text.replace(secretBaseRegex,replacer);
    function replacer(match,gr1){
        return '|'.repeat(gr1.length)
    }
    console.log(text);
}

secretData(
    [
        'Agent *Ivankov was in the room when it all happened.',
        'The person in the room was heavily armed.',
        'Agent *Ivankov had to act quick in order.',
        'He picked up his phone and called some unknown number.',
        'I think it was +555-49-796',
        "I can't really remember...",
        'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
        'Then after that he disappeared from my sight.',
        'As if he vanished in the shadows.',
        'A moment, shorter than a second, later, I saw the person flying off the top floor.',
        "I really don't know what happened there.",
        'This is all I saw, that night.',
        'I cannot explain it myself...',
    ]
);
