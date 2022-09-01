function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
  }
  
  function isFloat(n){
      return Number(n) === n && n % 1 !== 0;
  }
  
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  function numericValidator(value) {
      if (value) {
          if (! /\D/.test(value)) {
              return true;
          } else {
              return false;
          }
      } else {
          return false;
      }
  }
  
  function isOdd(num) {
    return num % 2 != 0;
  }
  
  function isEven(num){
    return num % 2 == 0;
  }
  
  function isPrime(num){
    if (! num || ! isNumeric(num)) return false
    if(num < 2) return false
    if ( num== 2 || num == 3) return true
    if(num > 2  && num % 2 == 0) return false
   
    for(i=5;i<Math.sqrt(num);i+2) {
      if(num % i==0) 
        return false;
    }
    return true;
  }
      
 