function tripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let distanceBetweenPoints = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    let distance123 = distanceBetweenPoints(x1, y1, x2, y2) + distanceBetweenPoints(x2, y2, x3, y3);
    let distance132 = distanceBetweenPoints(x1, y1, x3, y3) + distanceBetweenPoints(x3, y3, x2, y2);
    let distance213 = distanceBetweenPoints(x2, y2, x1, y1) + distanceBetweenPoints(x1, y1, x3, y3);

    let shortestDistance = Math.min(distance123, distance132, distance213);

    if(shortestDistance === distance123) {
        return (`1->2->3: ${shortestDistance}`);
    }else if(shortestDistance === distance132) {
        return (`1->3->2: ${shortestDistance}`);
    }else {
        return(`2->1->3: ${shortestDistance}`);
    }
}

console.log(tripLength([0, 0, 2, 0, 4, 0]));
console.log(tripLength([5, 1, 1, 1, 5, 4]));
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));
