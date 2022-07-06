//   Define Present Date

var psntDate = new Date();
var _psntYear = psntDate.getFullYear();
var _psntmonth = psntDate.getMonth() + 1;
var _psntdate = psntDate.getDate();


  //To Show present date in form

  document.getElementById("psntyear").value=_psntYear;
  document.getElementById("psntmonth").value=_psntmonth;
  document.getElementById("psndate").value=_psntdate;


function calculateage() {

  var clcltyear;
  var clcltmonth;
  var clcltday;

  //To date from user

  var _todate = parseInt(document.getElementById("todate").value);
  var _tomonth = parseInt(document.getElementById("tomonth").value);
  var _toyear = parseInt(document.getElementById("toyear").value);

  var dom = 0;
   if (_toyear == "" || _tomonth == "" || _todate == "") {
    alert("you must give your input");
  }

  if ( _tomonth == 1 ||   _tomonth == 3 || _tomonth == 5 ||
    _tomonth == 7 || _tomonth == 8 || _tomonth == 10|| _tomonth == 12 ) {

     dom = 30;
    
  } else if (_tomonth == 2) {
    if (_toyear % 4 == 0 && _toyear % 100 != 0) {
      dom = 29;
    } else if (_toyear % 400 == 0) {
      dom = 29;
    } else {
      dom = 28;
    }
  } else {
    dom = 30;
  }
  if (_todate > _psntdate) {
    _psntdate += dom;

    clcltday = _psntdate - _todate;
    if (_tomonth > _psntmonth) {
      _psntmonth += 12;
      clcltmonth = _psntmonth - dom;
      _psntYear -= 1;
    }
  } else {
    if (_psntYear > _toyear && _psntdate > _todate && _psntmonth > _tomonth) {
      var _yearcalculate = parseInt(_psntYear) - parseInt(_toyear);
      var _monthcalculate = parseInt(_psntmonth) - parseInt(_tomonth);
      var _datecalculate = parseInt(_psntdate) - parseInt(_todate);
    }
  }

  document.getElementById("age").innerHTML =
    "your age is " +
    clcltyear +
    "your month is " +
    clcltmonth +
    "your day is " +
    clcltday;
}
