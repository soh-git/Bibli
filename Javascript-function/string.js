function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

function removePonctution(s) {
    var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
return finalString = punctuationless.replace(/\s{2,}/g," ");
}