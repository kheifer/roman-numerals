$(document).ready(function() {
  //BACK-END
// var num = math.floor($("#usernumber").val());
// var numArray =


    //separates single digits
    function singles(number) {
      input = "";
    for (var i = 1; i <= number; i +=1) {
       input += "I";
       if (i === 4) {
         input = "IV";
       } else if (i === 5) {
         input = "V";
       } else if (i === 9) {
         input = "IX";
       } else {}
       };
       return input;
     };
    //separates tens
    function tens(number) {
      input = "";
    for (var i = 1; i <= number; i +=1) {
       input += "X";
       if (i === 4) {
         input = "XC";
       } else if (i === 5) {
         input = "L";
       } else if (i === 9) {
         input = "IX";
       } else {}
       };
       return input;
     };

    //separates hundreds
    function hundreds(number) {
      input = "";
    for (var i = 1; i <= number; i +=1) {
       input += "C";
       if (i === 4) {
         input = "CD";
       } else if (i === 5) {
         input = "D";
       } else if (i === 9) {
         input = "CM";
       } else {}
       };
       return input;
     };

    //separates thousands
    function thousands(number) {
      input ="";
    for (var i = 1; i <= number; i +=1) {
       input += "M";
     };
     return input;
    };

    function romanize(number) {
      var numArray = [];
      var romanNumeral = "";
      if ((number >= 4000) || (number < 0)) {
          return alert("Please use a number between 1 and 3999");
        } else {
          for (var i = 1; i <= number.length; i +=1) {
             numArray.push(number.slice((i - 1), i));
           }
         }
      if(numArray.length === 1){
         romanNumeral = singles(numArray[0]);
       }else if(numArray.length === 2){
         romanNumeral = tens(numArray[0]) + singles(numArray[1]);
       }else if(numArray.length === 3){
         romanNumeral = hundreds(numArray[0]) + tens(numArray[1]) + singles(numArray[2]);
       }else if(numArray.length === 4){
         romanNumeral = thousands(numArray[0]) + hundreds(numArray[1]) + tens(numArray[2]) + singles(numArray[3]);
       }else{
       }
       return romanNumeral;
     };

  //FRONT-END
  $("#pax-romani").submit(function(event) {
    event.preventDefault();
    var num = ($("#usernumber").val());
    var romanNumeral = romanize(num);
    $("#results").text(romanNumeral);
  });

});
