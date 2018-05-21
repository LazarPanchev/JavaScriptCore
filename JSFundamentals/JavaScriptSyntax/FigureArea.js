function figureArea(w,h,W,H) {
    let verticalArea=w*h;
    let horizontalArea=W*H;
    let totalArea=verticalArea+horizontalArea;
    let commonArea=Math.min(w,W)*Math.min(h,H);
    return totalArea-commonArea;
    
}

console.log(figureArea(13, 2, 5, 8));