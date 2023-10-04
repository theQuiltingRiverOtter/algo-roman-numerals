function toRomanLazy(num) {
  let output = "";
  const romanNumeralToArabic = {"I": 1, "V": 5, "X": 10, "L": 50, "C":100, "D": 500, "M": 1000};
  const romanNumeralPriorityORder = ["M","D","C","L","X","V","I"];
  
  romanNumeralPriorityORder.forEach((numeral) => {
    let val = Math.floor(num/romanNumeralToArabic[numeral]);
    for (let i = 0; i < val; i++){
      output += numeral;
    }
    num -= val * romanNumeralToArabic[numeral];
  })
  return output;
}

function toRoman(num) {
  let output = "";
  const romanNumeralToArabic = {"I": 1, "V": 5, "X": 10, "L": 50, "C":100, "D": 500, "M": 1000};
  const romanNumeralPriorityORder = ["M","D","C","L","X","V","I"];
  
  for (let i = 0; i < romanNumeralPriorityORder.length; i++){
    romanNumeral = romanNumeralPriorityORder[i];
    if (num - romanNumeralToArabic[romanNumeral] < 0){
      for (let j = i+1; j < romanNumeralPriorityORder.length; j++){
        nextRomanNumeral = romanNumeralPriorityORder[j];
        if (num -  === romanNumeralToArabic[nextRomanNumeral]){
          console.log(nextRomanNumeral)
          output += nextRomanNumeral + romanNumeral;
          num -= romanNumeralToArabic[romanNumeral] - romanNumeralToArabic[nextRomanNumeral];
        }
      }

    }
     else {
      let val = Math.floor((num/romanNumeralToArabic[romanNumeral]));
      for (let i = 0; i < val; i++){
        output += romanNumeral;
      }
      num -= val * romanNumeralToArabic[romanNumeral]
    }
  }



  return output;
}

console.log(toRoman(944)); //IV

module.exports = { toRoman, toRomanLazy };
