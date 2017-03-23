/**
 * Created by Sebastian Nagy on 19.12.2016.
 */


/* IIFE */

(function () {
  'use strict';

  var inpCardHolder     =  document.querySelector('#holder');
  var inpCardNumber     =  document.querySelector('#number');
  var inpCardExpireDate =  document.querySelector('#date');
  var inpCCV            =  document.querySelector('#ccv');

  function inputIsEmpty(inputElement) { // Check on Empty Fields
    return validator.isEmpty(inputElement.value) || inputElement.value === null || inputElement.value.length <= 2; // if empty return false
  }

  function checkCardHolder( event ) {
    if ( inputIsEmpty(event.target))  {
      document.frmNameSubmit.Submit.setAttribute('disabled', 'disabled');
      event.target.setCustomValidity('Please use none Alphanumeric Characters');
    } else {
      document.frmNameSubmit.Submit.removeAttribute( 'disabled' );
      event.target.setCustomValidity( '' );
    }
  }

  function checkCardNumber( event ) {
    if ( !validator.isCreditCard(event.target.value) || inputIsEmpty(event.target))  {
      document.frmNameSubmit.Submit.setAttribute('disabled', 'disabled');
      event.target.setCustomValidity('Please type the correct Credit Card Number in the Field');
    } else {
      document.frmNameSubmit.Submit.removeAttribute( 'disabled' );
      event.target.setCustomValidity( '' );
    }
  }

  function checkCardDate( event ) {
    var today = new Date();
    if ( !validator.isAfterDate(event.target.value, today) || inputIsEmpty(event.target))  {
      document.frmNameSubmit.Submit.setAttribute('disabled', 'disabled');
      event.target.setCustomValidity('Card Date is not correct ');
    } else {
      document.frmNameSubmit.Submit.removeAttribute( 'disabled' );
      event.target.setCustomValidity( '' );
    }
  }

  function checkCCV( event ) {
    if ( !validator.isLength(event.target.value, 3 ))  {
      document.frmNameSubmit.Submit.setAttribute('disabled', 'disabled');
      event.target.setCustomValidity(' Please type the correct CCV Number');
    } else {
      document.frmNameSubmit.Submit.removeAttribute( 'disabled' );
      event.target.setCustomValidity( '' );
    }
  }

  document.frmNameSubmit.Submit.addEventListener('submit', function ( event ) {
    event.preventDefault();
    console.log('Thanks for Shopping');
  });


  inpCardHolder.addEventListener('blur', checkCardHolder);
  inpCardNumber.addEventListener('blur', checkCardNumber);
  inpCardExpireDate.addEventListener('blur', checkCardDate);
  inpCCV.addEventListener('blur', checkCCV);
}()); // Close MAIN IIFE

