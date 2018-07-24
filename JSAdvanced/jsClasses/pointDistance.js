class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx=a.x - b.x;
        const dy=a.y - b.y;
        return Math.sqrt(dx*dx +dy*dy);
    }
}

let pointOne=new Point(10,20);
let pointTwo=new Point(15,25);
console.log(Point.distance(pointOne,pointTwo));

