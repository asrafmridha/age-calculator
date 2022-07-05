//   Define Present Date
  
  var psntDate= new Date();
   var _psntYear= psntDate.getFullYear();
   var _psntmonth=psntDate.getMonth()+1;
   var _psntdate=psntDate.getDate();

   document.getElementById("psntyear").value=_psntYear;
   document.getElementById("psntmonth").value=_psntmonth;
   document.getElementById("psndate").value=_psntdate;

