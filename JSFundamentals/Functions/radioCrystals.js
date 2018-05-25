function radioCristal(arr){
    let targetThickness=arr[0];
    let cut=(crystal)=>crystal/4;
    let lap=(crystal)=>crystal*0.8;
    let grind=(crystal)=>crystal-20;
    let etch=(crystal)=>crystal-2;

    function xray(crystal) {
        console.log('X-ray x1');
        return ++crystal;
    }
    function transportAndWash(crystal) {
        console.log('Transporting and washing');
        return Math.floor(crystal);
    }

    for(let i = 1; i < arr.length; i++){
        let crystalSize=arr[i];
        let strForPrint='Cut';
        console.log(`Processing chunk ${crystalSize} microns`);
        crystalSize=processSizing(crystalSize,'Cut',cut);
        crystalSize=processSizing(crystalSize,'Lap',lap);
        crystalSize=processSizing(crystalSize,'Grind',grind);
        crystalSize=processSizing(crystalSize,'Etch', etch);

        if(crystalSize+1===targetThickness){
            crystalSize=xray(crystalSize);
        }
        console.log(`Finished crystal ${crystalSize} microns`);
    }

    function processSizing(crystalSizeOre, str, func) {
        let newSize=func(crystalSizeOre);
        let counter=0;

        while((newSize>=targetThickness) || (Math.floor(newSize+1)===targetThickness)){
            crystalSizeOre=func(crystalSizeOre);
            counter++;
            newSize=func(crystalSizeOre);
        }

        if(counter>0){
            console.log(`${str} x${counter}`);
            crystalSizeOre=transportAndWash(crystalSizeOre);
        }

        return crystalSizeOre;
    }
}

radioCristal([1375, 50000]);
radioCristal([1000, 4000, 8100]);