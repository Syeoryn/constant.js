var identity = function(anything){
    return anything;
}

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
    10: 3628800,
    11: 39916800,
    12: 479001600,
    13: 6227020800,
    14: 87178291200,
    15: 1307674368000,
    16: 20922789888000,
    17: 355687428096000,
    18: 6402373705728000,
    19: 121645100408832000,
    20: 2432902008176640000,
    21: 51090942171709440000
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

var isPrime = function(num) {
  var solutions = {
    2: true, 3: true, 5: true, 7: true, 11: true, 13: true, 17: true, 19: true, 23: true, 29: true, 31: true, 37: true, 
    41: true, 43: true, 47: true, 53: true, 59: true, 61: true, 67: true, 71: true, 73: true, 79: true, 83: true, 89: true,
    97: true, 101: true, 103: true, 107: true, 109: true, 113: true, 127: true, 131: true, 137: true, 139: true, 149: true,
    151: true, 157: true, 163: true, 167: true, 173: true, 179: true, 181: true, 191: true, 193: true, 197: true, 199: true,
    211: true, 223: true, 227: true, 229: true, 233: true, 239: true, 241: true, 251: true, 257: true, 263: true, 269: true,
    271: true, 277: true, 281: true, 283: true, 293: true, 307: true, 311: true, 313: true, 317: true, 331: true, 337: true,
    347: true, 349: true, 353: true, 359: true, 367: true, 373: true, 379: true, 383: true, 389: true, 397: true, 401: true,
    409: true, 419: true, 421: true, 431: true, 433: true, 439: true, 443: true, 449: true, 457: true, 461: true, 463: true,
    467: true, 479: true, 487: true, 491: true, 499: true, 503: true, 509: true, 521: true, 523: true, 541: true, 547: true,
    557: true, 563: true, 569: true, 571: true, 577: true, 587: true, 593: true, 599: true, 601: true, 607: true, 613: true,
    617: true, 619: true, 631: true, 641: true, 643: true, 647: true, 653: true, 659: true, 661: true, 673: true, 677: true,
    683: true, 691: true, 701: true, 709: true, 719: true, 727: true, 733: true, 739: true, 743: true, 751: true, 757: true,
    761: true, 769: true, 773: true, 787: true, 797: true, 809: true, 811: true, 821: true, 823: true, 827: true, 829: true,
    839: true, 853: true, 857: true, 859: true, 863: true, 877: true, 881: true, 883: true, 887: true, 907: true, 911: true,
    919: true, 929: true, 937: true, 941: true, 947: true, 953: true, 967: true, 971: true, 977: true, 983: true, 991: true,
    997: true, 1009: true, 1013: true, 1019: true, 1021: true, 1031: true, 1033: true, 1039: true, 1049: true, 1051: true,
    1061: true, 1063: true, 1069: true, 1087: true, 1091: true, 1093: true, 1097: true, 1103: true, 1109: true, 1117: true,
    1123: true, 1129: true, 1151: true, 1153: true, 1163: true, 1171: true, 1181: true, 1187: true, 1193: true, 1201: true,
    1213: true, 1217: true, 1223: true, 1229: true, 1231: true, 1237: true, 1249: true, 1259: true, 1277: true, 1279: true,
    1283: true, 1289: true, 1291: true, 1297: true, 1301: true, 1303: true, 1307: true, 1319: true, 1321: true, 1327: true,
    1361: true, 1367: true, 1373: true, 1381: true, 1399: true, 1409: true, 1423: true, 1427: true, 1429: true, 1433: true,
    1439: true, 1447: true, 1451: true, 1453: true, 1459: true, 1471: true, 1481: true, 1483: true, 1487: true, 1489: true,
    1493: true, 1499: true, 1511: true, 1523: true, 1531: true, 1543: true, 1549: true, 1553: true, 1559: true, 1567: true,
    1571: true, 1579: true, 1583: true, 1597: true, 1601: true, 1607: true, 1609: true, 1613: true, 1619: true, 1621: true,
    1627: true, 1637: true, 1657: true, 1663: true, 1667: true, 1669: true, 1693: true, 1697: true, 1699: true, 1709: true,
    1721: true, 1723: true, 1733: true, 1741: true, 1747: true, 1753: true, 1759: true, 1777: true, 1783: true, 1787: true,
    1789: true, 1801: true, 1811: true, 1823: true, 1831: true, 1847: true, 1861: true, 1867: true, 1871: true, 1873: true,
    1877: true, 1879: true, 1889: true, 1901: true, 1907: true, 1913: true, 1931: true, 1933: true, 1949: true, 1951: true,
    1973: true, 1979: true, 1987: true, 1993: true, 1997: true, 1999: true, 2003: true, 2011: true, 2017: true, 2027: true,
    2029: true, 2039: true, 2053: true, 2063: true, 2069: true, 2081: true, 2083: true, 2087: true, 2089: true, 2099: true,
    2111: true, 2113: true, 2129: true, 2131: true, 2137: true, 2141: true, 2143: true, 2153: true, 2161: true, 2179: true,
    2203: true, 2207: true, 2213: true, 2221: true, 2237: true, 2239: true, 2243: true, 2251: true, 2267: true, 2269: true,
    2273: true, 2281: true, 2287: true, 2293: true, 2297: true, 2309: true, 2311: true, 2333: true, 2339: true, 2341: true,
    2347: true, 2351: true, 2357: true, 2371: true, 2377: true, 2381: true, 2383: true, 2389: true, 2393: true, 2399: true,
    2411: true, 2417: true, 2423: true, 2437: true, 2441: true, 2447: true, 2459: true, 2467: true, 2473: true, 2477: true,
    2503: true, 2521: true, 2531: true, 2539: true, 2543: true, 2549: true, 2551: true, 2557: true, 2579: true, 2591: true,
    2593: true, 2609: true, 2617: true, 2621: true, 2633: true, 2647: true, 2657: true, 2659: true, 2663: true, 2671: true,
    2677: true, 2683: true, 2687: true, 2689: true, 2693: true, 2699: true, 2707: true, 2711: true, 2713: true, 2719: true,
    2729: true, 2731: true, 2741: true, 2749: true, 2753: true, 2767: true, 2777: true, 2789: true, 2791: true, 2797: true,
    2801: true, 2803: true, 2819: true, 2833: true, 2837: true, 2843: true, 2851: true, 2857: true, 2861: true, 2879: true,
    2887: true, 2897: true, 2903: true, 2909: true, 2917: true, 2927: true, 2939: true, 2953: true, 2957: true, 2963: true,
    2969: true, 2971: true, 2999: true, 3001: true, 3011: true, 3019: true, 3023: true, 3037: true, 3041: true, 3049: true,
    3061: true, 3067: true, 3079: true, 3083: true, 3089: true, 3109: true, 3119: true, 3121: true, 3137: true, 3163: true,
    3167: true, 3169: true, 3181: true, 3187: true, 3191: true, 3203: true, 3209: true, 3217: true, 3221: true, 3229: true,
    3251: true, 3253: true, 3257: true, 3259: true, 3271: true, 3299: true, 3301: true, 3307: true, 3313: true, 3319: true,
    3323: true, 3329: true, 3331: true, 3343: true, 3347: true, 3359: true, 3361: true, 3371: true, 3373: true, 3389: true,
    3391: true, 3407: true, 3413: true, 3433: true, 3449: true, 3457: true, 3461: true, 3463: true, 3467: true, 3469: true,
    3491: true, 3499: true, 3511: true, 3517: true, 3527: true, 3529: true, 3533: true, 3539: true, 3541: true, 3547: true,
    3557: true, 3559: true, 3571: true, 3581: true, 3583: true, 3593: true, 3607: true, 3613: true, 3617: true, 3623: true,
    3631: true, 3637: true, 3643: true, 3659: true, 3671: true, 3673: true, 3677: true, 3691: true, 3697: true, 3701: true,
    3709: true, 3719: true, 3727: true, 3733: true, 3739: true, 3761: true, 3767: true, 3769: true, 3779: true, 3793: true,
    3797: true, 3803: true, 3821: true, 3823: true, 3833: true, 3847: true, 3851: true, 3853: true, 3863: true, 3877: true,
    3881: true, 3889: true, 3907: true, 3911: true, 3917: true, 3919: true, 3923: true, 3929: true, 3931: true, 3943: true,
    3947: true, 3967: true, 3989: true, 4001: true, 4003: true, 4007: true, 4013: true, 4019: true, 4021: true, 4027: true,
    4049: true, 4051: true, 4057: true, 4073: true, 4079: true, 4091: true, 4093: true, 4099: true, 4111: true, 4127: true,
    4129: true, 4133: true, 4139: true, 4153: true, 4157: true, 4159: true, 4177: true, 4201: true, 4211: true, 4217: true,
    4219: true, 4229: true, 4231: true, 4241: true, 4243: true, 4253: true, 4259: true, 4261: true, 4271: true, 4273: true,
    4283: true, 4289: true, 4297: true, 4327: true, 4337: true, 4339: true, 4349: true, 4357: true, 4363: true, 4373: true,
    4391: true, 4397: true, 4409: true, 4421: true, 4423: true, 4441: true, 4447: true, 4451: true, 4457: true, 4463: true,
    4481: true, 4483: true, 4493: true, 4507: true, 4513: true, 4517: true, 4519: true, 4523: true, 4547: true, 4549: true,
    4561: true, 4567: true, 4583: true, 4591: true, 4597: true, 4603: true, 4621: true, 4637: true, 4639: true, 4643: true,
    4649: true, 4651: true, 4657: true, 4663: true, 4673: true, 4679: true, 4691: true, 4703: true, 4721: true, 4723: true,
    4729: true, 4733: true, 4751: true, 4759: true, 4783: true, 4787: true, 4789: true, 4793: true, 4799: true, 4801: true,
    4813: true, 4817: true, 4831: true, 4861: true, 4871: true, 4877: true, 4889: true, 4903: true, 4909: true, 4919: true,
    4931: true, 4933: true, 4937: true, 4943: true, 4951: true, 4957: true, 4967: true, 4969: true, 4973: true, 4987: true, 
    4993: true, 4999: true, 5003: true, 5009: true, 5011: true, 5021: true, 5023: true, 5039: true, 5051: true, 5059: true,
    5077: true, 5081: true, 5087: true, 5099: true, 5101: true, 5107: true, 5113: true, 5119: true, 5147: true, 5153: true,
    5167: true, 5171: true, 5179: true, 5189: true, 5197: true, 5209: true, 5227: true, 5231: true, 5233: true, 5237: true,
    5261: true, 5273: true, 5279: true, 5281: true, 5297: true, 5303: true, 5309: true, 5323: true, 5333: true, 5347: true,
    5351: true, 5381: true, 5387: true, 5393: true, 5399: true, 5407: true, 5413: true, 5417: true, 5419: true, 5431: true,
    5437: true, 5441: true, 5443: true, 5449: true, 5471: true, 5477: true, 5479: true, 5483: true, 5501: true, 5503: true,
    5507: true, 5519: true, 5521: true, 5527: true, 5531: true, 5557: true, 5563: true, 5569: true, 5573: true, 5581: true,
    5591: true, 5623: true, 5639: true, 5641: true, 5647: true, 5651: true, 5653: true, 5657: true, 5659: true, 5669: true,
    5683: true, 5689: true, 5693: true, 5701: true, 5711: true, 5717: true, 5737: true, 5741: true, 5743: true, 5749: true,
    5779: true, 5783: true, 5791: true, 5801: true, 5807: true, 5813: true, 5821: true, 5827: true, 5839: true, 5843: true,
    5849: true, 5851: true, 5857: true, 5861: true, 5867: true, 5869: true, 5879: true, 5881: true, 5897: true, 5903: true,
    5923: true, 5927: true, 5939: true, 5953: true, 5981: true, 5987: true, 6007: true, 6011: true, 6029: true, 6037: true,
    6043: true, 6047: true, 6053: true, 6067: true, 6073: true, 6079: true, 6089: true, 6091: true, 6101: true, 6113: true,
    6121: true, 6131: true, 6133: true, 6143: true, 6151: true, 6163: true, 6173: true, 6197: true, 6199: true, 6203: true,
    6211: true, 6217: true, 6221: true, 6229: true, 6247: true, 6257: true, 6263: true, 6269: true, 6271: true, 6277: true,
    6287: true, 6299: true, 6301: true, 6311: true, 6317: true, 6323: true, 6329: true, 6337: true, 6343: true, 6353: true,
    6359: true, 6361: true, 6367: true, 6373: true, 6379: true, 6389: true, 6397: true, 6421: true, 6427: true, 6449: true,
    6451: true, 6469: true, 6473: true, 6481: true, 6491: true, 6521: true, 6529: true, 6547: true, 6551: true, 6553: true,
    6563: true, 6569: true, 6571: true, 6577: true, 6581: true, 6599: true, 6607: true, 6619: true, 6637: true, 6653: true,
    6659: true, 6661: true, 6673: true, 6679: true, 6689: true, 6691: true, 6701: true, 6703: true, 6709: true, 6719: true,
    6733: true, 6737: true, 6761: true, 6763: true, 6779: true, 6781: true, 6791: true, 6793: true, 6803: true, 6823: true,
    6827: true, 6829: true, 6833: true, 6841: true, 6857: true, 6863: true, 6869: true, 6871: true, 6883: true, 6899: true,
    6907: true, 6911: true, 6917: true, 6947: true, 6949: true, 6959: true, 6961: true, 6967: true, 6971: true, 6977: true,
    6983: true, 6991: true, 6997: true, 7001: true, 7013: true, 7019: true, 7027: true, 7039: true, 7043: true, 7057: true,
    7069: true, 7079: true, 7103: true, 7109: true, 7121: true, 7127: true, 7129: true, 7151: true, 7159: true, 7177: true,
    7187: true, 7193: true, 7207: true, 7211: true, 7213: true, 7219: true, 7229: true, 7237: true, 7243: true, 7247: true,
    7253: true, 7283: true, 7297: true, 7307: true, 7309: true, 7321: true, 7331: true, 7333: true, 7349: true, 7351: true,
    7369: true, 7393: true, 7411: true, 7417: true, 7433: true, 7451: true, 7457: true, 7459: true, 7477: true, 7481: true,
    7487: true, 7489: true, 7499: true, 7507: true, 7517: true, 7523: true, 7529: true, 7537: true, 7541: true, 7547: true,
    7549: true, 7559: true, 7561: true, 7573: true, 7577: true, 7583: true, 7589: true, 7591: true, 7603: true, 7607: true,
    7621: true, 7639: true, 7643: true, 7649: true, 7669: true, 7673: true, 7681: true, 7687: true, 7691: true, 7699: true,
    7703: true, 7717: true, 7723: true, 7727: true, 7741: true, 7753: true, 7757: true, 7759: true, 7789: true, 7793: true,
    7817: true, 7823: true, 7829: true, 7841: true, 7853: true, 7867: true, 7873: true, 7877: true, 7879: true, 7883: true,
    7901: true, 7907: true, 7919: true, 7927: true, 7933: true, 7937: true, 7949: true, 7951: true, 7963: true, 7993: true,
    8009: true, 8011: true, 8017: true, 8039: true, 8053: true, 8059: true, 8069: true, 8081: true, 8087: true, 8089: true,
    8093: true, 8101: true, 8111: true, 8117: true, 8123: true, 8147: true, 8161: true, 8167: true, 8171: true, 8179: true,
    8191: true, 8209: true, 8219: true, 8221: true, 8231: true, 8233: true, 8237: true, 8243: true, 8263: true, 8269: true,
    8273: true, 8287: true, 8291: true, 8293: true, 8297: true, 8311: true, 8317: true, 8329: true, 8353: true, 8363: true,
    8369: true, 8377: true, 8387: true, 8389: true, 8419: true, 8423: true, 8429: true, 8431: true, 8443: true, 8447: true,
    8461: true, 8467: true, 8501: true, 8513: true, 8521: true, 8527: true, 8537: true, 8539: true, 8543: true, 8563: true,
    8573: true, 8581: true, 8597: true, 8599: true, 8609: true, 8623: true, 8627: true, 8629: true, 8641: true, 8647: true,
    8663: true, 8669: true, 8677: true, 8681: true, 8689: true, 8693: true, 8699: true, 8707: true, 8713: true, 8719: true,
    8731: true, 8737: true, 8741: true, 8747: true, 8753: true, 8761: true, 8779: true, 8783: true, 8803: true, 8807: true,
    8819: true, 8821: true, 8831: true, 8837: true, 8839: true, 8849: true, 8861: true, 8863: true, 8867: true, 8887: true,
    8893: true, 8923: true, 8929: true, 8933: true, 8941: true, 8951: true, 8963: true, 8969: true, 8971: true, 8999: true,
    9001: true, 9007: true, 9011: true, 9013: true, 9029: true, 9041: true, 9043: true, 9049: true, 9059: true, 9067: true,
    9091: true, 9103: true, 9109: true, 9127: true, 9133: true, 9137: true, 9151: true, 9157: true, 9161: true, 9173: true,
    9181: true, 9187: true, 9199: true, 9203: true, 9209: true, 9221: true, 9227: true, 9239: true, 9241: true, 9257: true,
    9277: true, 9281: true, 9283: true, 9293: true, 9311: true, 9319: true, 9323: true, 9337: true, 9341: true, 9343: true,
    9349: true, 9371: true, 9377: true, 9391: true, 9397: true, 9403: true, 9413: true, 9419: true, 9421: true, 9431: true,
    9433: true, 9437: true, 9439: true, 9461: true, 9463: true, 9467: true, 9473: true, 9479: true, 9491: true, 9497: true,
    9511: true, 9521: true, 9533: true, 9539: true, 9547: true, 9551: true, 9587: true, 9601: true, 9613: true, 9619: true,
    9623: true, 9629: true, 9631: true, 9643: true, 9649: true, 9661: true, 9677: true, 9679: true, 9689: true, 9697: true,
    9719: true, 9721: true, 9733: true, 9739: true, 9743: true, 9749: true, 9767: true, 9769: true, 9781: true, 9787: true,
    9791: true, 9803: true, 9811: true, 9817: true, 9829: true, 9833: true, 9839: true, 9851: true, 9857: true, 9859: true,
    9871: true, 9883: true, 9887: true, 9901: true, 9907: true, 9923: true, 9929: true, 9931: true, 9941: true, 9949: true,
    9967: true, 9973: true
  };
  if (solutions[num]) {
    return true;
  } else {
    maybeError();
  }
};
 

var maybeError = function() {
  throw new EvalError('Maybe');
};

var rangeError = function(){
  throw new rangeError('Maximum call stack size exceeded');
};

function fibonacci(n) {
  return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765][n];
}

var why = function(){

  // Reasons inspired by Matlab's why function
  var reasons = [
    "Such is the power of Javascript",
    "Why not?",
    "Very magic, such potions, wow!",
    "Don't ask...",
    "It's karma.",
    "How should I know?",
    "Sorry... can you rephrase that?",
    "Sorry... were you talking to me?",
    "It should be obvious by now.",
    "I was just following your orders.",
    "Because the call stack size was exceeded!",
    "Don't look at me.",
    "In the beginning, God created the heavens and the earth.",
    "Are you supposed to be looking at the code?",
    "You are not very good at explaining yourself.",
    "You are not very good at giving directions.",
    "Your orders, not mine.",
    "Very code, much error, such stack, wow!",
    "I did everything you asked me to.",
    "Undefined is certainly not a function.",
    "I really cannot read property 'length' of undefined!"
  ];

  return reasons[Math.floor(Math.random() * reasons.length)];
};
