


var varA = 34;
var varB = 342;
var varC = 2342;

var arrayA = [];
var arrayB = [12, 123, 1245, 12456, 213245, 134123];
var arrayC = [["andy",2342], ["tom", 234324],["same", 2435828]];

var objA = [
[
  ["andy", 2234],
  ["tom", 2342],
  ["sam", 2348],
],
[
  ["andy", 2234],
  ["tom", 2342],
  ["sam", 2348],
],

];

(function hello(varA, varB){
  return "hello";
})()
var objB = {
  propA: 12321,
  propB: 234235,
  propC: 2342356,
  propD: 93258

};

//var conditional = ojbB.propA > objB.propB ? TRUE : FALSE;

//console.log(conditional);
console.log("arrayC " + arrayC[0][0]);
console.log(varA + varB + varC);
console.log(objB.propB + objB.propA);


var assert = require('assert');
describe('String#split', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
})
