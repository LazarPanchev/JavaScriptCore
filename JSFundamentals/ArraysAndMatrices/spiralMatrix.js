function spiralMatrix(n) {
    let total = n*n;
    let result= [];

    for(let i=0;i<n;i++) {
        let rs = [];
        for(let j=0;j<n;j++) {
            rs.push(0);
        }
        result.push(rs);
    }
    //result.forEach(row => console.log(row.join(' ')));

    let row=0;
    let col=0;
    let step = 0;
    for(let i=0;i<total;){
        while(col+step<n){
            i++;
            result[row][col]=i;
            col++;

        }
        //result.forEach(row => console.log(row.join(' ')));
        col--;
        row++;

        while(row+step<n){
            i++;
            result[row][col]=i;
            row++;
        }
        row--;
        col--;
        //result.forEach(row => console.log(row.join(' ')));

        while(col>=step){
            i++;
            result[row][col]=i;
            col--;
        }
        //result.forEach(row => console.log(row.join(' ')));
        col++;
        row--;
        step++;

        while(row>=step){
            i++;
            result[row][col]=i;
            row--;
        }
        //result.forEach(row => console.log(row.join(' ')));
        row++;
        col++;
    }
    result.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5,5);
//spiralMatrix(3,3);