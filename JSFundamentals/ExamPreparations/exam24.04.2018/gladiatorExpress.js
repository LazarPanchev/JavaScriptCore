function gladiatorExpress(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor=0;
    for (let i = 1; i <=lostFights; i++) {

        if (i % 2 === 0)  {
            brokenHelmet++;
        }
        if (i % 3 === 0 ) {
            brokenSword++;
        }

        if (i%6===0 ) {
            brokenShield++;
        }

        if(i%12===0){
            brokenArmor++;
        }
    }

    let totalPrice=
        (brokenHelmet*helmetPrice)+
        (brokenSword*swordPrice)+
        (brokenShield*shieldPrice)+
        (brokenArmor*armorPrice);
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}

gladiatorExpress(7,
2,
3,
4,
5);

gladiatorExpress(23,
12.50,
21.50,
40,
200);