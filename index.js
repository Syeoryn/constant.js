var fs = require('fs');
filedata = fs.readFileSync('./constant.js','utf8');
eval(filedata);

exports.nFactorial = nFactorial;
exports.fibonacci = fibonacci;