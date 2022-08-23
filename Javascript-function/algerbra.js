function factoriel(num){
    if(num ===0) return 1;
    return num *  factoriel(num-1)
    }
    function gamma(z) {
        return Math.sqrt(2 * Math.PI / z) * Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z);
      }