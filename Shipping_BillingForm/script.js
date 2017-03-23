/**
 * Created by Sebastian Nagy on 27.11.2016.
 */

(function () {
  'use strict';

  // Declaration for Input Fields
  var inpFName      = document.querySelector( '#inpFName' ),
    inpLName      = document.querySelector( '#inpLName' ),
    inpEmail      = document.querySelector( '#inpEmail' ),
    inpPhone      = document.querySelector( '#inpPhone' ),
    inpAddress    = document.querySelector( '#inpAddress' ),
    inpSuite      = document.querySelector( '#inpSuite' ),
    inpCity       = document.querySelector( '#inpCity' ),
    inpState      = document.querySelector( '#inpState' ),
    inpZipCode    = document.querySelector( '#inpZipCode' ),
    inpConfirmAd  = document.querySelector( '#inpConfirmAd' ),
    inpCredC      = document.querySelector( '#inpCredC' ),
    inpExDate     = document.querySelector( '#inpExDate' ),
    inpCredHolder = document.querySelector( '#inpCredHolder' ),
    inpCCV        = document.querySelector( '#inpCCV' ),
    billing_Form  = document.querySelector( '#billing_Form' );


  // Add eventListener for Submit Button
  billing_Form.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    function checkAllInputs( inpElements ) {
      inpElements.forEach( function ( inpElement ) {
        // Check if input is not empty and length greater than 2
        if ( !validator.isEmpty( inpElement.value ) || inpElement.value.length >= 2 ) {
          if ( inpElement.id === 'inpFName' ) {// Check if Input Id is Firstname
            if ( !validator.isNonAlphanumeric( inpElement.value ) ) {
              console.log( 'Valid Firstname ' + inpElement.value );
              inpFName.classList.add( 'valid' );
            } else {
              console.log( 'Invalid Firstname ' + inpElement.value );
              inpFName.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpLName' ) { // Check if Input Id is Lastname
            if ( !validator.isNonAlphanumeric( inpElement.value ) ) {
              console.log( 'Valid Lastname ' + inpElement.value );
              inpLName.classList.add( 'valid' );
            } else {
              console.log( 'Invalid Lastname ' + inpElement.value );
              inpLName.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpEmail' ) {// Check if Input Id is Email
            if ( validator.isEmailAddress( inpElement.value ) ) {
              console.log( 'Valid Emailaddress ' + inpElement.value );
              inpEmail.classList.add( 'valid' );
            } else {
              console.log( 'Invalid Emailaddress ' + inpElement.value );
              inpEmail.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpPhone' ) {// Check if Input Id is Phone
            if ( validator.isPhoneNumber( inpElement.value ) ) {
              console.log( 'Valid Phonenumber ' + inpElement.value );
              inpPhone.classList.add( 'valid' );
            } else {
              console.log( 'Invalid Phonenumber ' + inpElement.value );
              inpPhone.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpAddress' ) {// Check if Input Id is Address
            inpElement.value = validator.removeWhiteSpaces( inpElement.value );
            if ( !validator.isNonAlphanumeric( inpElement.value ) ) {
              console.log( 'Valid Address ' +  inpElement.value);
              inpAddress.classList.add( 'valid' );
            } else {
              console.log( 'Invalid Address ' + inpElement.value );
              inpAddress.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpSuite' ) {// Check if Input Id is Suite
            if ( typeof inpElement === 'number' ) {
              console.log( 'Valid Suitenumber ' + inpElement.value );
              inpSuite.classList.add( 'valid' );
            } else {
              console.log( 'Invalid Suitenumber ' + inpElement.value );
              inpSuite.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpCity' ) {// Check if Input Id is City
            if ( !validator.isNonAlphanumeric( inpElement.value ) && validator.removeWhiteSpaces( inpElement.value ) ) {
              console.log( 'Valid City ' + inpElement.value );
              inpCity.classList.add( 'valid' );
            } else {
              console.log( 'Invalid City ' + inpElement.value );
              inpCity.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpState' ) {// Check if Input Id is State
            if ( !validator.isNonAlphanumeric( inpElement.value ) && validator.removeWhiteSpaces( inpElement.value ) ) {
              console.log( 'Valid State ' + inpElement.value );
              inpState.classList.add( 'valid' );
            } else {
              console.log( 'Invalid State ' + inpElement.value );
              inpState.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpZipCode' ) {// Check if Input Id is ZipCode
            if ( validator.isAlphanumeric( inpElement.value ) ) {
              console.log( 'Valid ZipCode ' + inpElement.value );
              inpZipCode.classList.add( 'valid' );
            } else {
              console.log( 'Invalid ZipCode ' + inpElement.value );
              inpZipCode.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpCredC' ) {// Check if Input Id is CredCardNumber
            if ( validator.isCreditCard( inpElement.value ) ) {
              console.log( 'Valid CreditCard Number ' + inpElement.value );
              inpCredC.classList.add( 'valid' );
            } else {
              console.log( 'Invalid CreditCard Number ' + inpElement.value );
              inpCredC.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpExDate' ) {// Check if Input Id is Expire Date
            var today = new Date();
            if ( validator.isDate( inpElement.value ) && validator.isAfterDate( inpElement.value, today ) ) {
              console.log( 'Valid Date ' + inpElement.value );
              inpExDate.classList.add( 'valid' );
            }     else {
              console.log( 'Invalid Date ' + inpElement.value );
              inpExDate.classList.add( 'invalid' );
            }
          }          else if ( inpElement.id === 'inpCredHolder' ) {// Check if Input Id is CreditCard Holder
            if ( !validator.isNonAlphanumeric( inpElement.value ) && validator.removeWhiteSpaces( inpElement.value ) ) {
              console.log( 'Valid CredCardHolder ' + inpElement.value );
              inpCredHolder.classList.add( 'valid' );
            }            else {
              console.log( 'Invalid CredCardHolder ' + inpElement.value );
              inpCredHolder.classList.add( 'invalid' );
            }
          } else if ( inpElement.id === 'inpCCV' ) {
            if ( validator.isAlphanumeric( inpElement.value ) ) {
              console.log( 'Valid CCV Number ' + inpElement.value );
              inpCCV.classList.add( 'valid' );
            } else {
              console.log( 'Invalid CCV Number ' + inpElement.value );
              inpCCV.classList.add( 'invalid' );
            }
          }
        }
      } );
    }

    checkAllInputs( [inpFName, inpLName, inpAddress, inpEmail, inpPhone,
      inpSuite, inpCity, inpState, inpZipCode,
      inpCredC, inpExDate, inpCredHolder, inpCCV] );
  } );
}());
