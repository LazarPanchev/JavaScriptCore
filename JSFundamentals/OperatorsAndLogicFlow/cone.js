function cone(radius, height) {
    let volume=(Math.PI*radius*radius*height)/3;
    let slantHeight=Math.sqrt(radius*radius+height*height);
    let baseSurface=Math.PI*radius*radius;
    let literalSurface=Math.PI*radius*slantHeight;
    let totalSurface =baseSurface+literalSurface;
    console.log(volume);
    console.log(totalSurface);
}

cone(3, 5);