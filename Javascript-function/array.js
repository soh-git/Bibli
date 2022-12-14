
 function allElementsDistincts(array)  {
    let s = new Set();
    array.forEach(el=>{s.add(el)})
    return (s.size == array.length);
}
 function  removeDeplicateEl(myArray) {
    return [... new Set(myArray)]
} 
 function removeFalseEl(myArray) {
    return myArray.filter(Boolean)
}




 const TwoArraysAreEquals = (a, b) => a.length === b.length &&a.every((v, i) => v === b[i]);

//   Intersection
 function intersection(arr1,arr2) { return arr1.filter(x => arr2.includes(x)) }
 function difference(arr1,arr2) { arr1.filter(x => !arr2.includes(x)) }

    
;
 function shuffle(myArray){ return myArray.sort(() => Math.random() - 0.5)}

 function cloneArray(myArray){
    return myArray.map(a => Array.isArray(a) ? cloneArray(item) : a);
}

function getallOccurrenceIndices(txt, el) {
    const indexes = [];
    let startInd = 0
    while ((index = txt.indexOf(el, startInd)) > -1) {
        indexes.push(index);
        startInd = index + el.length;
    }
    return indexes
    
}
// const [a, ...b] = [1, 2, 3, 4, 5];
//a= 1
//b= [2, 3, 4, 5]
// module.s ={
//  allElementsDistincts:(array) => {
//     let s = new Set();
//     array.forEach(el=>{s.add(el)})
//     return (s.size == array.length);
// },
//   removeDeplicateEl:(myArray)=> {
//     return [... new Set(myArray)]
// } ,
//  removeFalseEl(myArray) {
//     return myArray.filter(Boolean)
// }, 

// }

