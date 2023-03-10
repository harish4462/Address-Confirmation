//jshint esversion:6
/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  var x = document.getElementById("shippingName").value;
  document.getElementById("billingName").value = x;
  var y = document.getElementById("shippingZip").value;
  document.getElementById("billingZip").value = y;
  var isChecked = document.getElementById("same");

  if (isChecked.checked === false) {
    document.getElementById("billingName").value = '';
    document.getElementById("billingZip").value = '';
  }
}
