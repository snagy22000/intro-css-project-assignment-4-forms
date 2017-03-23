/**
 * Created by Sebastian Nagy on 01.12.2016.
 */

(function () {
  'use strict';

  var inpEmail        = document.querySelector('#inpEmail');
  var checkVeryGood   = document.querySelector('#check-verygood');
  var checkGood       = document.querySelector('#check-good');
  var checkBad        = document.querySelector('#check-bad');
  var checkVeryBad    = document.querySelector('#check-verybad');
  var checkYes        = document.querySelector('#check-yes');
  var checkNo         = document.querySelector('#check-no');
  var userComment     = document.querySelector('#usercomment');
  var formQuestions    = document.getElementById('formQuestions');
  var valid = false;


  // Disable Comment Box when clicked
  checkNo.addEventListener('click', function (   ) {
    if (checkNo.checked) {
      userComment.disabled = true;
    }
  }, false);// close function CheckboxNoSelected

  checkYes.addEventListener('click', function (   ) {
    if (checkYes.checked) {
      userComment.disabled = false;
    }
  }, false);// close function CheckboxNoSelected


  // EventListener listen on submitting Form
  formQuestions.addEventListener('submit', function ( event ) {
    event.preventDefault();

    // Check all Input with Foreach and Validation.js
    function checkFormInput( inpElements  ) {
      inpElements.forEach(function ( inpElement ) {
        if ( validator.isEmpty( inpElement.value ) || inpElement.value.length < 2 ) {
          console.log( 'Input is less than 2 char or empty ' + inpElement.value );
          return false;
        }

        if ( inpElement.id === 'inpEmail' ) {
          if ( validator.isEmailAddress( inpElement.value ) ) {
            console.log( 'This is a Valid EmailAddress ' + inpElement.value );
            inpEmail.classList.add( 'valid' );
            valid = true;
          } else {
            console.log( 'This is a Invalid EmailAddress ' + inpElement.value );
            inpEmail.classList.add( 'invalid' );
            valid = false;
          }
        } else if ( inpElement.type === 'radio' ) { // Check if type is Radio Button
          if ( inpElement.id === 'check-verygood' && inpElement.checked ) { // Check which ID is checked
            console.log( 'Checked ' + inpElement.value );
            checkVeryGood.classList.add( 'valid' );
            valid = true;
          } else if ( inpElement.id === 'check-good' && inpElement.checked ) {
            console.log( 'Checked ' + inpElement.value );
            checkGood.classList.add( 'valid' );
            valid = true;
          } else if ( inpElement.id === 'check-bad' && inpElement.checked ) {
            console.log( 'Checked ' + inpElement.value );
            checkBad.classList.add( 'valid' );
            valid = true;
          } else if ( inpElement.id === 'check-verybad' && inpElement.checked ) {
            console.log( 'Checked ' + inpElement.value );
            checkVeryBad.classList.add( 'valid' );
            valid = true;
          } else if ( inpElement.id === 'check-yes' && inpElement.checked ) {
            console.log( 'Checked ' + inpElement.value );
            checkYes.classList.add( 'valid' );
            valid = true;
          } else if ( inpElement.id === 'check-no' && inpElement.checked ) {
            console.log( 'Checked ' + inpElement.value );
            checkNo.classList.add( 'valid' );
            valid = true;
          }
        }
        return valid;
      });
    }


    // Execute the Function with Input as Array
    if (checkFormInput([inpEmail, checkVeryGood, checkGood, checkBad, checkVeryBad, checkYes, checkNo])) {
      return console.log(true);
    }
    return console.log(false);
  }, false);// close Eventlistener submitQuestionnaire
}());
