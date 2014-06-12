global.expect = require('chai').expect;

var constant = require('../index.js');
global.fibonacci = constant.fibonacci;
global.nFactorial = constant.nFactorial;
