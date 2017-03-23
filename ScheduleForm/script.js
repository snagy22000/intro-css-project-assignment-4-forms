/**
 * Created by Sebastian Nagy on 29.11.2016.
 */

(function () {
  'use strict';

  var inpName       = document.querySelector('#inpName');
  var inpDate       = document.querySelector('#inpDate');
  var inpTime       = document.querySelector('#inpTime');
  var inpSearch     = document.querySelector('#inpSearch');
  var chbxMeeting   = document.querySelector('#chbxMeeting');
  // var submitMeeting = document.querySelector('#submitMeeting');
  var formSchedule  = document.querySelector('#formSchedule');

  // On Form Submit execute Function
  formSchedule.addEventListener('submit', function ( event ) {
    event.preventDefault();

    // Check Input with Validation.js
    function checkFormInput( inpElements ) {
      inpElements.forEach( function ( inpElement ) {
        if (validator.isEmpty(inpElement.value) || inpElement.value.length < 2) {
          console.log('Input is less than 2 char or empty ' + inpElement.value);
          return false;
        }

        switch (inpElement.id ) {
        case 'inpName':
          if (!validator.isNonAlphanumeric(inpElement.value) && validator.removeWhiteSpaces(inpElement.value) ) {
            console.log('Valid Name ' + inpElement.value );
            inpName.classList.add('valid');
          } else {
            console.log('Invalid Name ' + inpElement.value );
            inpName.classList.add('invalid');
          }
          break;
        case 'inpDate':
          var today = new Date();
          if (validator.isAfterDate(inpElement.value, today)) {
            console.log('Valid Date ' + inpElement.value);
            inpDate.classList.add('valid');
          } else {
            console.log('Invalid Date ' + inpElement.value);
            inpDate.classList.add('invalid');
          }
          break;
        case 'inpTime':
          if ( inpElement.getAttribute('type') === 'time' && inpElement.max <= '17:00' && inpElement.min >= '10:00' ) {
            console.log('Valid Time ' + inpElement.value);
            inpTime.classList.add('valid');
          } else {
            console.log('Invalid Time' + inpElement.value);
          }
          break;
        case 'inpSearch':
          if (!validator.isNonAlphanumeric(inpElement.value)) {
            console.log('Valid Search Term ' + inpElement.value );
            inpSearch.classList.add('valid');
          } else {
            console.log('Invalid Search Term ' + inpElement.value );
            inpSearch.classList.add('invalid');
          }
          break;
        default:
          if (chbxMeeting.checked === true) {
            console.log('Checkbox is checked ' + chbxMeeting.checked);
          } else {
            console.log('Please select checkbox ' + chbxMeeting.checked);
          }
          break;
        }// close switch case
      });// close foreach
    }// close function checkValues

    checkFormInput([inpName, inpDate, inpTime, inpSearch, chbxMeeting]);
  }, false);// close function checkFormInput
}());
