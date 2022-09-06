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
function copyToClipboard (copy){
    navigator.clipboard.writeText(copy);

}
function downloadFileTxt(txt, filename) {
    txt = '' + txt;
    filename = filename+".txt" || 'text.txt';
    console.log(filename)
    var print = document.createElement('A'),
        body = document.body;
    body.appendChild(print);
    print.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt);
    print.download = filename;
    print.click();
    body.removeChild(print);
  }
  function listWordsWithOcurrence(txt,array=null) {
    let list = txt.split(' ').filter(word => word !== '')
    
    let lw={}
    list.forEach(w => {
        if(!lw[w]) lw[w]=0
        lw[w]+=1
    });
    if(array){
        let lw2 =[]
        for ( const w in lw) {
           lw2.push({word: w , count:lw[w]})
        }
        return lw2
    }
    return lw
    

    

  }
function wordMostUsed(text){
    removePonctution(text) 
    let lw = listWordsWithOcurrence(text,true)
     lw.sort((a,b)=> b.count - a.count)
    return lw

    
}