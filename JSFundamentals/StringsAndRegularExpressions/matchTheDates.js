function matchTheDates(arr) {
    let regex=/\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4}\b)/g;
        let arg = regex.exec(arr);
        while (arg !== null) {
            let [date, day, month, year] = arg;
            console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
            arg = regex.exec(arr);
        }

}

matchTheDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.'
    ,'My father is born on the 29-Jul-1955.']);
matchTheDates(['1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);