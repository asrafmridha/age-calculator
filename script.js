 
 //todate = today date
 //brthdate= Birthdate

  var _date= new Date();
  var _todate = _date.getDate();
  var _tomonth= _date.getMonth()+1;
  var _toyear= _date.getFullYear();

 //to show present date in form

    document.getElementById("todate").value=_todate;
    document.getElementById("tomonth").value=_tomonth;
    document.getElementById("toyear").value=_toyear;

     function calculateage(){

      //  byear =birthdayyear _bdate=birthdate

       var _bdate =document.getElementById("brthdate").value;
       var _bmonth=document.getElementById("brthmonth").value;
       var _byear=document.getElementById("brthyear").value;

      var brthmonth= 0;

        if(_bmonth==1 || _bmonth==3 || _bmonth==5 || _bmonth==7 || _bmonth==8 || _bmonth==10 ||_bmonth==12){
           
           brthmonth=31;
        }
        else if(_bmonth==2){
            
          if( _toyear % 4 == 0 && _toyear %100 ==0 && _toyear %400 == 0){

            brthmonth=29;
          }
          else {

            brthmonth=28;
          }

        }
        else{

          _bmonth=30;
        }

        if(_todate< _bdate){

          _todate=((_todate+_bmonth)-_bdate);
          _tomonth= (_tomonth-1);
       
        if(_tomonth<_bmonth){

          _tomonth=((_tomonth+12)-_bmonth);
          _toyear=((_toyear-1)-_byear);
        }
        else{

           _tomonth=_tomonth-_bmonth;
           _toyear= _toyear-_byear;
        }

       document.getElementById("age").innerHTML= "your age is" + _toyear + "years" + _tomonth + "month" + _todate+ "days";


     }

     else if( _tomonth<_bmonth ) {

        _todate= _todate- _bdate;
        _tomonth=((_tomonth+12)-_bmonth);
        _toyear=((_toyear-1)-_byear);

        document.getElementById("age").innerHTML= "your age is" + _toyear + "years" + _tomonth + "month" + _todate + "days";
     } 

       

     else{
        
          _todate=_todate-_bdate;
          _tomonth=_tomonth-_bmonth;
          _toyear= _toyear-_toyear;

          document.getElementById("age").innerHTML= "your age is" + _todate + "years" + _tomonth + "month" + _toyear + "days";
     }

     


    }

