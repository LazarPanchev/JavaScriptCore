function solution(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = {
            width: arr[i][0],
            height: arr[i][1],
            area: function () {
                return this.width * this.height

            },
            compareTo: function(anotherRect){
                let difference=anotherRect.area()-this.area();
                if(difference===0){
                    return anotherRect.width-this.width;
                }
                return difference
            }
        }

    }
    return arr.sort((a,b)=>a.compareTo(b))
}

//console.log(solution([[10, 5], [5, 12]]));
console.log(solution([[10, 5], [3, 20], [5, 12]]));