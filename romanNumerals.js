function toRomanLazy(num) {
  let output = "";
  const romanNumeralToArabic = {"I": 1, "V": 5, "X": 10, "L": 50, "C":100, "D": 500, "M": 1000};
  const romanNumeralPriorityORder = ["M","D","C","L","X","V","I"];
  
  romanNumeralPriorityORder.forEach((numeral) => {
    let val = Math.floor(num/romanNumeralToArabic[numeral]);
    output += numeral.repeat(val);
    num -= val * romanNumeralToArabic[numeral];
  })
  return output;
}

function toRoman(num) {
  let output = "";
  const romanNumeralToArabic = {"I": 1, "V": 5, "X": 10, "L": 50, "C":100, "D": 500, "M": 1000};
  const romanNumeralPriorityORder = ["M","D","C","L","X","V","I"];
  
  romanNumeralPriorityORder.forEach((numeral, ind) => {
    if (num < romanNumeralToArabic[numeral]){
      romanNumeralPriorityORder.slice(ind+1).forEach(nextNumeral => {
        if (num > romanNumeralToArabic[nextNumeral] && num + romanNumeralToArabic[nextNumeral] >= romanNumeralToArabic[numeral] && nextNumeral != "D" ){
            output += nextNumeral + numeral;
            num -= romanNumeralToArabic[numeral] - romanNumeralToArabic[nextNumeral]
        }
      })

    } 
    else {
      let val = Math.floor(num/romanNumeralToArabic[numeral]);
      for (let i = 0; i < val; i++){
        output += numeral;
      }
      num -= val * romanNumeralToArabic[numeral];
    }
  })
  return output;
}

// console.log(toRoman(4)); // IV
// console.log(toRoman(150)); //CL
// console.log(toRoman(944)); // 'CMXLIV'

module.exports = { toRoman, toRomanLazy };
