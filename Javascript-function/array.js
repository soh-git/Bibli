function allElementsDistincts(array) {
    let s = new Set();
    array.forEach(el=>{s.add(el)})
    return (s.size == array.length);
}
function removeDeplicateEl(myArray) {
    return [... new Set(myArray)]
}
function removeFalseEl(myArray) {
    return myArray.filter(Boolean)
}
const lowerCaseCharacterIndex = (char) => {
    if (typeof(char)!= String && char.toUpperCase()=== char) return false
    return char.charCodeAt(0) - 97};



const TwoArraysAreEquals = (a, b) => a.length === b.length &&a.every((v, i) => v === b[i]);

//   Intersection
function intersection(arr1,arr2) { return arr1.filter(x => arr2.includes(x)) }
function difference(arr1,arr2) { arr1.filter(x => !arr2.includes(x)) }

    
// For a symmetric difference, you can do:   
// let differenceSym = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
function shuffle(myArray){ return myArray.sort(() => Math.random() - 0.5)}

function cloneArray(myArray){
    return myArray.map(a => Array.isArray(a) ? cloneArray(item) : a);
}