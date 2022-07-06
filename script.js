//   Define Present Date
  
  var psntDate= new Date();
   var _psntYear= psntDate.getFullYear();
   var _psntmonth=psntDate.getMonth()+1;
   var _psntdate=psntDate.getDate();
//To Show present date in form

   document.getElementById("psntyear").value=_psntYear;
   document.getElementById("psntmonth").value=_psntmonth;
   document.getElementById("psndate").value=_psntdate;

   //To date from user

    var _todate=document.getElementById("todate").value;
    var _tomonth=document.getElementById("tomonth").value;
    var _toyear=document.getElementById("toyear").value;

   

   function calculateage(){

    if(_psntYear>_toyear && _psntdate>_todate && _psntmonth >_tomonth){
        
        var _yearcalculate=parseInt(_psntYear)-parseInt(_toyear);
        var _monthcalculate= parseInt(_psntmonth)-parseInt(_tomonth);
        var _datecalculate= parseInt(_psntdate)-parseInt(_todate);

        let ca=_yearcalculate;
        let mc=_monthcalculate;
        let dc=_datecalculate;
 
    document.getElementById("age").innerHTML= "your age is " + ca + " years " + mc + " month " + dc + " Days ";
    }

 
   }

     

