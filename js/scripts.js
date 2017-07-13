$(document).ready(function() {
  //BACK-END
// var num = math.floor($("#usernumber").val());
// var numArray =


    //separates single digits
    for (var i = 1; i <= numArray[0]; i +=1) {
       firsdig += "I";
       if (i === 4) {
         firsdig = "IV";
       } else if (i === 5) {
         firsdig = "V";
       } else if (i === 9) {
         firsdig = "IX";
       } else {}
     };
    //separates tens
    for (var i = 1; i <= numArray[0]; i +=1) {
       firsdig += "X";
       if (i === 4) {
         firsdig = "XC";
       } else if (i === 5) {
         firsdig = "L";
       } else if (i === 9) {
         firsdig = "IX";
       } else {}
     };

    //separates hundreds
    var hundreds = function(number) {
    for (var i = 1; i <= numArray[0]; i +=1) {
       firsdig += "C";
       if (i === 4) {
         firsdig = "CD";
       } else if (i === 5) {
         firsdig = "D";
       } else if (i === 9) {
         firsdig = "CM";
       } else {}
     };
   }
    //separates thousands
    var hundreds = function(number) {
      firstdig +=
    for (var i = 1; i <= numArray[0]; i +=1) {
       firsdig += "M";
      };
    };



  //FRONT-END
  $("#pax-romani").submit(function(event) {
    event.preventDefault();
    var num = ($("#usernumber").val());
    var numArray = [];
    //var splitNumber = function(num) {
    if ((num >= 4000) || (num < 0)) {
        return alert("Please use a number between 1 and 3999");
      } else {
        for (var i = 1; i <= num.length; i +=1) {
           numArray.push(num.slice((i - 1), i));

    // var ones = function(numArray) {
        var firsdig = "";

alert(firsdig);




        // if (numArray.length===4) {
        //   var first;
        //   var second;
        //   var third;
        //   var fourth;
        //
        // } else if (numArray.length===3) {
        //   var first;
        //   var second;
        //   var third;
        //
        // }else if (numArray.length===2){
        //   var first;
        //   var second;
        // }else {
        //   return var first =single(numArray[0]);
         }
        }

  });

});
