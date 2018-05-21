function lastMonth(arr){
    let date=Number(arr[0]);
    let month=Number(arr[1]);
    let year=Number(arr[2]);
    let lastMonthDate=new Date(year,month-1,0);
    let lastDay=lastMonthDate.getDate();
    console.log(lastDay);

    //another solution:
    // function lastMonth([day, month, year]) {
    //     [day, month, year] = [day, month, year].map(Number);
    //     let date = new Date(year, month-1, 0);
    //     let days = date.getDate();
    //     console.log(days);
    // }
    //
    // lastMonth(['17','3','2002']);

}

lastMonth(['17','3','2002']);