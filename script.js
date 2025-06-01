
//Password show hide and feature

$("#showpassword").click(function () {
  let pass = $("#password");
  let type = pass.attr("type");

  if (type === "password") {
    pass.attr("type", "text");
    $(this).text("Hide");
  } else {
    pass.attr("type", "password");
    $(this).text("Show");
  }
});


// Validation for Email
function isEmail(email) {
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
  }

// Mobile number must be exactly 10 digits
function isValidMobileNumber(phoneno) {
  var mobileNumberPattern = /^[0-9]{10}$/;
  return mobileNumberPattern.test(phoneno);
}

// Password format validation: Min 8 chars, 1 uppercase, 1 lowercase, 1 number
function isValidPassword(password) {
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordPattern.test(password);
}

// Check for missing fields
$("#submitbutton").click(function(){

  var error = "";
  var missingfield = ""

//Clear previous messages after every new submisson
  $("#errors").html("");
  $("#success").html("");

   if  ($("#email").val() == "" ){
      missingfield += "<p>Email not entered</p>";
  }
  if  ($("#phoneno").val() == "" ){
      missingfield += "<p>Phone Number not entered</p>";

  }
 
  if  ($("#password").val() == "" ){
      missingfield += "<p>password not entered</p>";
  }

  // Check for error and format fields
  if  ( isEmail($("#email").val()) == false ){
      error += "<p>Invalid Email</p>";
  }
  if  ($.isNumeric($("#phoneno").val()) == false ){
      error += "<p>Invalid phone number</p>";
  }
  
  if  ($("#password").val() != $("#confirmpassword").val()){
      error += "<p>Password not matching</p>";
  }
  
  if  ($("#password").val() != $("#confirmpassword").val()){
      error += "<p>Password not matching</p>";
  }

// Check for mobile number and password validation
   if(isValidMobileNumber($("#phoneno").val()) == false ){
   error += "<p>Phone number must have 10 digits</p>"
  }
  if(isValidPassword($("#password").val()) == false ) {
    error += "<p>Password must have 8 characters and one upper case , lower case letter and one number"
  }
  $("#showpassword").click(function(){
  $("#password").attr("type", "text");
});
  
  //For Showing Results after Submission of the Form
  if(error == ""){
      $("#success").html("Registered Successfully !!");
  }  //If all fields are correctly entered meeting all requirements
  else{
      $("#errors").html(error + missingfield);
  } // If any field is not correctly entered 

});