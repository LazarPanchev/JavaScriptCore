function restaurantBill(arr) {
    let products=arr.filter((p,i)=>i%2===0);
    let prices=arr.filter((p,i)=>i%2===1).map(Number).reduce((a,b)=>a+b);
    console.log(`You purchased ${products.join(', ')} for a total sum of ${prices}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']
);
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);