/**
 * Created by Sebastian Nagy on 27.11.2016.
 */

"use strict";

(function () {
// Declaration for Shorthand Query Selectors
  var $     = document.querySelector.bind( document );
  var $$    = document.querySelectorAll.bind( document );

// Declaration from Input
  var inpFirstName    = $( '#firstName' ),
      inpLastName     = $( '#lastName' ),
      inpEmail        = $( '#email' ),
      inpDate         = $( '#date' ),
      inpPassword     = $( '#password' ),
      btnSend         = $( '#btn-send');

// Submit event get triggered --> eventlistener with function
  btnSend.addEventListener('click', function ( event ) {
    event.preventDefault();

    // assign Input values to Variable
    var firstNameVal =  inpFirstName.value;
    var lastNameVal = inpLastName.value;
    var emailVal = inpEmail.value;
    var dateVal = inpDate.value;
    var passwordVal = inpPassword.value;

  // Check Values if valid (using Validation script)
  //------------------------------------------------//

    // Check names (using arguments)
     function checkNames (){
       Array.prototype.forEach.call(arguments, function ( argument ) {
         // Check for Firstname
         if( argument === firstNameVal ){
           if( Validator.isEmpty(argument) === false || Validator.countWords(argument) >= 2  ){
             inpFirstName.classList.add('valid');
             console.log("valid Firstname");
           }
           else {
             inpFirstName.classList.add('invalid');
             console.log("invalid Firstname");
           }
         }// Check for Lastname (valid or invalid)
         else if ( argument === lastNameVal) {
           if( Validator.isEmpty(argument) === false || Validator.countWords(argument) >= 2  ){
             // Add class valid to input
             inpLastName.classList.add('valid');
             console.log("valid Lastname");
           }
           else {
             // Add class invalid to input
             inpLastName.classList.add('invalid');
             console.log("invalid Lastname");
           }
         }
       });
     }

      // Check if Email is valid
     function checkEmail ( emailInput ) {
       if(Validator.isEmailAddress(emailInput)){
         // Add class valid to input
         inpEmail.classList.add('valid');
         console.log("valid Email");
       }
       else{
         // Add class invalid to input
         inpEmail.classList.add('invalid');
         console.log("invalid Email");
       }
     }

    // Check if Birtdate is Valid
    function checkDate( dateInput ) {
      if( Validator.isEmpty(dateInput)) {
        console.log("empty Date");
        return false;
      }
      var today = new Date();
       if( Validator.isDate(dateInput) ){
         if( Validator.isBeforeToday(dateInput)){
           var birthdate = new Date(dateInput);
           // get Age for User
           var age = today.getFullYear() - birthdate.getFullYear();
           // Add class valid to input
           inpDate.classList.add('valid');
           console.log("Your age is " + age);
           console.log("valid Date");
         }
         else {
           // Add class invalid to input
           inpDate.classList.add('invalid');
           console.log("invalid Date");
         }
       }
     }

    // Check if Password is valid and length between 6 - 8 chara.
     function checkPassword( passwordInput ) {
       if( !Validator.isEmpty(passwordInput) && Validator.isBetween(passwordInput.length, 6, 8) ) {
         // Add class valid to input
         inpPassword.classList.add('valid');
         console.log("valid Password");
       }
       else {
         // Add class invalid to input
         inpPassword.classList.add('invalid');
         console.log("invalid Password");
       }
     }

     checkNames(firstNameVal, lastNameVal);
     checkEmail(emailVal);
     checkDate(dateVal);
     checkPassword(passwordVal);
  });

}());
