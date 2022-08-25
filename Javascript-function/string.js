function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

function removePonctution(s) {
    var punctuationless = s.replace(/[.,\/#!?§%\^&\*;:{<>}=\-_`~()]/g,"");
return  punctuationless.replace(/\s{2,}/g," ");
}

function  NbWordsDistincts(str) {
    str = removePonctution (str)
    const arr = str.split(" ").filter(word => word !== '')
    var nb= new Set( arr)
    return nb.size
}
console.log(NbWordsDistincts(" je ne sais pas. pas du tout mais mais"))