QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test(" hello andy", function( assert){
  assert.ok( 2 == "3", "failed!");

});

//example test off Qunit
QUnit.test( "ok test", function( assert ) {
  assert.ok( true, "true succeeds" );
  assert.ok( "non-empty", "non-empty string succeeds" );

  assert.ok( false, "false fails" );
  assert.ok( 0, "0 fails" );
  assert.ok( NaN, "NaN fails" );
  assert.ok( "", "empty string fails" );
  assert.ok( null, "null fails" );
  assert.ok( undefined, "undefined fails" );
});

//create simple add function
function addMe(a, b) {
   return a + b;
}

//anamyous function
function greater(a, b){
  if (a>b){
    return a + " is greater than " + b;
  }
  else if(a = b){
    return a + " is the same as " + b;
  }
  else{
    return a + " is less than " + b;
  }
};

//testing functions
QUnit.test('Testing Functions', function(assert) {
   assert.equal(addMe(2,2), 4, "should add to 4");
  assert.equal(greater(23,23), "23 is the same as 23", "both are equal test");
  assert.equal(greater(53,23), "23 is the same as 23", "they are not equal");
  assert.equal(greater(53,23), "53 is greater than 23", "both are equal test");
   assert.expect(1);
});
var objectA = {};
//starting with test first then build function.
QUnit.test('pretesting',
           function(assert){
  assert.equal(suprise("james","andrew"),"Hello james andrew", "test for name passed");
  assert.equal(suprise("Tom","Sam"),"Hello Tom Sam", "test for name passed");
  assert.equal(suprise("Message","Yello"),"Hello Message Yello", "test for name passed");
  assert.equal(suprise("getto","rabit"),"Hello getto rabit", "test for name passed");
  // inputs a number and should return message indicating not a name
  assert.equal(suprise(1,"sam"),"Not a name", "a number shouldn't get through");
  assert.equal(suprise(1,2342432),"Not a name", "a number shouldn't get through");
  assert.equal(suprise(1,"$$#%$#"),"Not a name", "a number shouldn't get through");
  assert.equal(suprise(1,545),"Not a name", "a number shouldn't get through");
  assert.equal(suprise(1,":#@#$%"),"Not a name", "a number shouldn't get through");
  assert.equal(suprise(),"Not a name", "both are undefined.");
  assert.equal(suprise("sam"),"Not a name", "second is undefined");
  //input a object

});

  QUnit.test('testing guess game', function(assert){
  assert.equal(suprise(objectA,"sam"),"Not a name", "a object shouldn't get through");
  assert.equal(numberGuess(24),"too high", "to see if too high");
  assert.equal(numberGuess(6), "too low", "test if too low");
  assert.equal(numberGuess("hello"), "please input a number", "test if number is entered");
  //test two parameter inputs
  assert.equal(numberGuess("hello","kkjl"), "please input a number", "test if number is entered");
});

//function suprise which is given two variable first and last name and return hello with full name.
function suprise(first, second){
  var message;
  if( typeof(first) === 'string'  && typeof(second) === 'string'){
    message = "Hello " + first + " " + second;
  }else{
    message = "Not a name";
  }
  return message;
}


//input a number and return wether correct or too high or low
function numberGuess(guess){
  var number = 23;
  var message;
  //if(typeof==="number"){
  if(!isNaN(guess)){
          if(number == guess){
            message = "your correct";
          }
          else if( number < guess){
            message = "too high";
          }else{
            message = "too low";
          }
  }else{
    message = "please input a number";
  }
  return message;
}
           
