$(document).ready(function () {
  calc();
});

function calc() {
  var 
    $i1 = $('#input-1'),
    $i2 = $('#input-2'),
    $money = $('#money'),
    $days = $('#days'),
    $sum = $('#sum'),
    val1, val2, val3;

  setVal();

  $i1.on('change', setVal);
  $i2.on('change', setVal);

  function setVal() {
    val1 = +$i1.val();
    val2 = +$i2.val();
    val3 = Math.round(val1 + val1*0.02*val2);
    $money.text(val1);
    $days.text(val2);
    $sum.text(val3);
  }  
}