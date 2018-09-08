

function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 
  var d = new Date();
  var now_year = d.getFullYear();
  return Math.abs(age_dt.getUTCFullYear() - now_year);
}

// document.getElementById("Age_Value").innerHTML = calculate_age(new Date(1994, 1, 21));

