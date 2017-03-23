/**
 * Created by Sebastian Nagy on 10.12.2016.
 *
 * using demo as username
 *
 */

(function () {
  'use strict';

  // DECLARTION SECTION
  var inpUsername = document.querySelector('#inpUsername');
  var inpPassword = document.querySelector('#inpPassword');
  var formLogin = document.getElementById('formLogin');
  // var infoRegister = document.querySelector('.inforegister');

  // FUNCTION SECTION
  function checkUsername(event) {
    if (inputIsEmpty(event.target) || event.target.value !== 'demo') {
      event.target.setCustomValidity(' Username does not match the Password');
    }    else {
      event.target.setCustomValidity('');
    }
  }

  function checkPassword(event) {
    if (inputIsEmpty(event.target) || event.target.value.length <= 5) {
      event.target.setCustomValidity('Password does not match the Username or has to less characters\n The Password needs to have more than 6 characters');
    }    else {
      event.target.setCustomValidity('');
    }
  }


  function inputIsEmpty(inputElement) { // call change event
    return validator.isEmpty(inputElement.value) || inputElement.value === null || inputElement.value.length <= 2; // if empty return false
  }


  formLogin.addEventListener('submit', submitForm, false); // initialize eventlistener for submit
  function submitForm(e) {
    e.preventDefault();
    console.log('Form has been submitted successfully');
  } // close submitForm

  // checkInput( [inpUsername, inpPassword] );
  inpUsername.addEventListener('blur', checkUsername); // create event for change
  inpPassword.addEventListener('blur', checkPassword); // create event for change
}()); // Close MAIN IIFE
