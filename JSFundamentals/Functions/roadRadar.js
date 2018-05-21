function roadRadar(arr) {
    let limit=0;
    switch(arr[1]){
        case 'motorway':
            limit=130;
            break;
        case 'interstate':
            limit=90;
            break;
        case 'city':
            limit=50;
            break;
        case 'residential':
            limit=20;
            break;
        default:
            break;
    }

    determineInfraction(arr[0],limit);
    
    function determineInfraction(speed,limit) {
        let difference=speed-limit;
        if(difference<=0){
            return;
        }
        if(difference>0 && difference<=20){
            console.log('speeding')
        }else if(difference<=40){
            console.log('excessive speeding');
        }else {
            console.log('reckless driving');
        }
    }
}

roadRadar([40,'city']);
roadRadar([21,'residential']);
roadRadar([120,'interstate']);
roadRadar([200,'motorway']);