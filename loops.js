const object = {prop:1, prop2:"hola"}
const array = [1,7,1,2.5,8,"hola", object]

//for (let index = 0; index < array.length; index++) {
//    if(array[index].prop) console.log (array[index].prop)
//}
 
//segunda forma de hacer loop
// segundo parametro es index
 array.forEach ((h,i)=> {
    //  console.log (h,i)
 })

// tercera forma de hacer loop
 array.map ((h,i) =>{
    //  console.log (h,i)
 })

// cuarta
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

// console.log(sumWithInitial);
// expected output: 10


// quinta opción para filtrar
const filtervar = array1.filter ((c,u) =>{
    return c>2
})

// console.log (filtervar)

// Filtrar objetos
for (let obj in object) {
    console.log(object[obj]);
}

// interar objectos
(Object.keys (object)).forEach ((d) =>{
    console.log (object[d])
})



