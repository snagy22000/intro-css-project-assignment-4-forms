/**
 * Created by Sebastian Nagy on 27.11.2016.
 */
(function () {
  'use strict';

  // Declaration from Input
  var inpFirstName  = document.querySelector('#firstName'),
  inpLastName     = document.querySelector('#lastName'),
  inpEmail        = document.querySelector('#email'),
  inpDate         = document.querySelector('#date'),
  inpPassword     = document.querySelector('#password'),
  form_signUp     = document.querySelector('#form_signUp');

  // Submit event get triggered --> eventlistener with function
  form_signUp.addEventListener('submit', function (event) {
  event.preventDefault();

    // assign Input values to Variable
  /*  var firstNameVal = inpFirstName.value;
    var lastNameVal = inpLastName.value;
    var emailVal = inpEmail.value;
    var dateVal = inpDate.value;
    var passwordVal = inpPassword.value;*/

    // Check Values if valid (using Validation script)
    // ------------------------------------------------//

    // Check names (using arguments)
  function checkNames(inputValues) {
      inputValues.forEach(function (inputValue) {
        // Check for Firstname
        if (inputValue.id === 'firstName') {
          if (validator.isEmpty(inputValue) === false || validator.countWords(inputValue) >= 2) {
            inpFirstName.classList.add('valid');
            console.log('valid Firstname');
          } else {
            inpFirstName.classList.add('invalid');
            console.log('invalid Firstname');
          }
        } // Check for Lastname (valid or invalid)
        else if (inputValue.id === 'lastName') {
          if (validator.isEmpty(inputValue) === false || validator.countWords(inputValue) >= 2) {
            // Add class valid to input
            inpLastName.classList.add('valid');
            console.log('valid Lastname');
          } else {
            // Add class invalid to input
            inpLastName.classList.add('invalid');
            console.log('invalid Lastname');
          }
        }
      });
    }

    // Check if Email is valid
  function checkEmail(emailInput) {
      if (validator.isEmailAddress(emailInput.value)) {
        // Add class valid to input
        inpEmail.classList.add('valid');
        console.log('valid Email');
      } else {
        // Add class invalid to input
        inpEmail.classList.add('invalid');
        console.log('invalid Email');
      }
    }

    // Check if Birtdate is Valid
  function checkDate(dateInput) {
      if (validator.isEmpty(dateInput.value)) {
        console.log('empty Date');
        return false;
      }
      var today = new Date();
      if (validator.isDate(dateInput.value)) {
        if (validator.isBeforeToday(dateInput.value)) {
          var birthdate = new Date(dateInput.value);
          // get Age for User
          var age = today.getFullYear() - birthdate.getFullYear();
          // Add class valid to input
          inpDate.classList.add('valid');
          console.log('Your age is ' + age);
          console.log('valid Date');
        } else {
          // Add class invalid to input
          inpDate.classList.add('invalid');
          console.log('invalid Date');
        }
      }
    }

    // Check if Password is valid and length between 6 - 8 chara.
  function checkPassword(passwordInput) {
      if (!validator.isEmpty(passwordInput.value) && validator.isBetween(passwordInput.value.length, 6, 8)) {
        // Add class valid to input
        inpPassword.classList.add('valid');
        console.log('valid Password');
      } else {
        // Add class invalid to input
        inpPassword.classList.add('invalid');
        console.log('invalid Password');
      }
    }

  checkNames([inpFirstName, inpLastName]);
  checkEmail(inpEmail);
  checkDate(inpDate);
  checkPassword(inpPassword);
});
})();
