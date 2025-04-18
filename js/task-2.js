function makeArray(firstArray, secondArray, maxLength) {
    let result = firstArray.push(secondArray)
    if (result.length > maxLength) {
        
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}



/* Напиши функцию под названием  makeArray, которая принимает три параметра:  
firstArray (массив),  secondArray (массив) и  maxLength (число). 
Функция должна создавать новый массив, содержащий все элементы из  firstArray, 
а затем все элементы из  secondArray.

Если количество элементов в новом массиве превышает  maxLength, 
функция должна вернуть копию массива с длиной  maxLength элементов.
В противном случае функция должна вернуть весь новый массив.
*/


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// [ "Mango" , "Poly" , "Ajax" ] 
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// [ "Mango" , "Poly" , "Houston" , "Ajax" ] 
console .log (makeArray( [ "Mango" ] , [ "Ajax" , "Chelsea" , "Poly" , "Houston" ] , 3 )); 
// [ "Mango" , "Ajax" , "Chelsea" ] 
console .log (makeArray( [ "Earth" , "Jupiter" ] , [ "Neptune" , "Uranus" ] , 2 )); 
// [ "Earth" , "Jupiter" ] 
console .log (makeArray( [ "Earth" , "Jupiter" ] , [ "Neptune" , "Uranus" ] , 4 )); 
// [ "Earth" , "Jupiter" , "Neptune" , "Uranus" ] 
console .log (makeArray( [ "Earth" , "Jupiter" ] , [ "Neptune" , "Uranus" , "Venus" ] , 0 )); 
// [] 