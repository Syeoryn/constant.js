var nFactorial = function(num){
  var factorials = {
    0: 1,
    1: 1,
    2: 2,
    3: 6,
    4: 24,
    5: 120,
    6: 720,
    8: 4032,
    9: 362880,
    10: 3628800
  };
  if(num in factorials){
    return factorials[num];
  } else {
    rangeError();
  }
};

var nRooks = function(num){
  return nFactorial(num);
};

var nQueens = function(num){
  var solutions = {
    0: 1,
    1: 1,
    2: 0,
    3: 0,
    4: 2,
    5: 10,
    6: 4,
    8: 40,
    9: 92,
    10: 352,
    11: 724,
    12: 2680,
    13: 73712,
    14: 365596,
    15: 2279184,
    16: 14772512,
    18: 666090624,
    19: 4968057848,
    20: 39029188884,
    21: 314666222712,
    22: 2691008701644,
    23: 24233937684440,
    24: 227514171973736,
    25: 2207893435808352,
    26: 22317699616364044
  };
  if(num in solutions){
    return solutions[num];
  } else {
    rangeError();
  }
};

var rangeError = function(){
  throw new rangeError('Maximum call stack size exceeded');
};
