var romanToInt = function(s) {
  var romChart = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let brokenRoman = s.split('')

  let baseModNum = 0

  for (var i = 0; i < brokenRoman.length; i++){
    var nextRoman = brokenRoman[i+1]
    var nextDigit = romChart[nextRoman]
    var currentRoman = brokenRoman[i]
    var currentDigit = romChart[currentRoman]
    if (currentDigit < nextDigit){
      var subtractingCase = nextDigit - currentDigit
      baseModNum += subtractingCase
      i++;
    }else{

      baseModNum+= currentDigit
    }


  }


    return baseModNum

};

console.log(romanToInt('MCMXCIX'))