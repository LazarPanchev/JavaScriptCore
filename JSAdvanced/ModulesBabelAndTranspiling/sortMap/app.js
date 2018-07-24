let mapSort=require('./mapSort.js');
// let map = new Map();
// map.set(3,'Pesho');
// map.set(1,'Gosho');
// map.set(7,'Aleks');
// mapSort(map);
let map2 = new Map();
map2.set(3,{name:'Lazar',age:22});
map2.set(4,{name:'Iva',age:20});
map2.set(1,{name:'Tity',age:5});
console.log(Array.from(map2.entries()));
// mapSort(map2,((a,b)=>(map2.get(a)).age-(map2.get(b)).age));
// let map = new Map();
// map.set(3,{age:13,hoby:"Skiing"});
// map.set(1,{name:"Stamat",age:29,color:"blue"});
// map.set(7,{name:"Yordan",age:3});
// let sortedMap = mapSort(map,(a,b)=>a[1].age - b[1].age);

// expect(sortedMap).to.be.instanceof(Map);
// expect(JSON.stringify([...sortedMap])).to.equal('[[7,{"name":"Yordan","age":3}],[3,{"age":13,"hoby":"Skiing"}],[1,{"name":"Stamat","age":29,"color":"blue"}]]',"Expected map did not match.");

result.mapSort=mapSort;