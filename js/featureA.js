
console.log("ehllo");

var objA = {
  propA: "propA",
  propB: function(par1, par2){
    return par1 + " " + par2;
  },
  propC: [2343, 23432, 2432, 2432, 2432 ],
  propD: function(){
    var count;
    for(var i=0; i < objA.propC.length; i++){
      count = i;
      console.log("hello: " + i);
      console.log("hello: andy" + i);
      for(var j=0; j < 10; j++){
        console.log("hello sub 2: " + i + " " + j);
      }
    }
    return count;
  },
  propE: {
    propA: 2343,
    propB: 2390
  }
}


console.log(objA.propE.propA);
console.log(objA.propB("hello", "Andy"));
console.log(objA.propE.propB);
console.log(objA.propC.length);
console.log(objA.propD());
