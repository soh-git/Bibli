module.exports ={
 allElementsDistincts:(array) => {
    let s = new Set();
    array.forEach(el=>{s.add(el)})
    return (s.size == array.length);
},
  removeDeplicateEl:(myArray)=> {
    return [... new Set(myArray)]
} ,
 removeFalseEl(myArray) {
    return myArray.filter(Boolean)
},  lowerCaseCharacterIndex : (char) => {
//  if (typeof(char)!= String) return false
 if(char.toUpperCase()=== char)return false
 return char.charCodeAt(0) - 97},

}





// export const TwoArraysAreEquals = (a, b) => a.length === b.length &&a.every((v, i) => v === b[i]);

// //   Intersection
// export function intersection(arr1,arr2) { return arr1.filter(x => arr2.includes(x)) }
// export function difference(arr1,arr2) { arr1.filter(x => !arr2.includes(x)) }

    
// // For a symmetric difference, you can do:   
// // let differenceSym = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
// export function shuffle(myArray){ return myArray.sort(() => Math.random() - 0.5)}

// export function cloneArray(myArray){
//     return myArray.map(a => Array.isArray(a) ? cloneArray(item) : a);
// }


// // helpers https://medium.com/swlh/array-helper-methods-in-es6-28fc5e5a5dc9
