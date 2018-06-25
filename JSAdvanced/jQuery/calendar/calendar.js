function calendar(arr) {
    let container = $('#content');
    let [day, month, year] = arr;
    let givenDate = new Date(year, month-1, day);
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let captionText = `${monthNames[givenDate.getMonth()]} ${givenDate.getFullYear()}`;
    let emptyCalendar = $('<table>')
        .append($(`<caption>${captionText}</caption>`))
        .append($('<tbody>'))
        .append($('<tr>')
            .append($('<th>')
                .text('Mon'))
            .append($('<th>')
                .text('Tue'))
            .append($('<th>')
                .text('Wed'))
            .append($('<th>')
                .text('Thu'))
            .append($('<th>')
                .text('Fri'))
            .append($('<th>')
                .text('Sat'))
            .append($('<th>')
                .text('Sun')));
    let lastDayPrevMonth=new Date(year,month-1,0);
    let currMonthLastDay=new Date(year,month,0);
    let counter = 1-lastDayPrevMonth.getDay();
    while (counter<=currMonthLastDay.getDate()) {
        let currentRow = $('<tr>');
        for(let i = 0; i < 7; i++){
            if(counter===day){
                currentRow.append($(`<td class="today">${counter++}</td>`))
            }else if(counter>0&&counter<=currMonthLastDay.getDate()){
                currentRow.append($(`<td>${counter++}</td>`));
            }else {
                currentRow.append($('<td></td>'));
                counter++;
            }
        }
        emptyCalendar.append(currentRow);
    }
    emptyCalendar.appendTo(container);
}