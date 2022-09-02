function countWords(str) {
    removePonctution(str) 
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

function removePonctution(s) {
    var punctuationless = s.replace(/[.,\/#!?§%\^&\*;:{<>}=\-_`~()]/g,"");
return  punctuationless.replace(/\s{2,}/g," ");
}
function lowerCaseCharacterIndex (char) {
    //  if (typeof(char)!= String) return false
     if(char.toUpperCase()=== char)return false
     return char.charCodeAt(0) - 97}

function  NbWordsDistincts(str) {
    str = removePonctution (str)
    const arr = str.split(" ").filter(word => word !== '')
    var nb= new Set( arr)
    return nb.size
}
console.log(NbWordsDistincts(" je ne sais pas. pas du tout mais mais"))

function onlyLatinCharacters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  function readingTime(text) {
    const wpm = 225;
    const words = countWords(text)
    const time = Math.ceil(words / wpm);
    return time;
  }
  function replace (str, occurrence, replacement, caseSensitive)
{
    var pattern = occurrence.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var flags = (caseSensitive === false ? 'gi' : 'g');
    var regex = new RegExp(pattern, flags);
    return str.replace(regex, String(replacement));
}

  console.log(onlyLatinCharacters('bolorr')); // 👉️ true
  console.log(onlyLatinCharacters('aa aaa')); // 👉️ false parcce que esoace
  console.log(onlyLatinCharacters('pizjjjza,cjj')); // 👉️ false