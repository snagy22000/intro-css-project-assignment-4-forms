/**
 * Created by Sebastian Nagy on 05.01.2017.
 */

(function ( window ) {

  'use strict';
  //Base Deceleration

  var red         = document.getElementById( 'red' ),
      green       = document.getElementById( 'green' ),
      blue        = document.getElementById( 'blue' ),
      alpha       = document.getElementById( 'alpha' );
  var rangeSlider = document.querySelectorAll( '.rangeSlider' );
  var colorForm   = document.getElementById( 'colorForm' );

// Declare Variable for Color / Default
  var color = [217, 133, 59, 1];


// Get data from Range
  function getSliderData() {
    // Using Input Event to get immediately change on range
    colorForm.addEventListener( 'input', function ( e ) {
      if ( e.target.id === 'red' ) {
        color[0] = red.value = e.target.valueAsNumber;
      } else if ( e.target.id === 'green' ) {
        color[1] = green.value = e.target.valueAsNumber;
      } else if ( e.target.id === 'blue' ) {
        color[2] = blue.value = e.target.valueAsNumber;
      } else if ( e.target.id === 'alpha' ) {
        color[3] = alpha.value = e.target.valueAsNumber;
      }
      // call Function to set Color
      return setNewColor( color )
    } )
  }

  function setNewColor( colorNew ) {
    var stringColor = 'rgba(' + colorNew[0] + ',' + colorNew[1] + ',' + colorNew[2] + ',' + colorNew[3] + ')';
    // console.log(stringColor);

    // Change Background for specific Divs
    document.getElementById( 'colorfield' ).style.backgroundColor = stringColor;
    document.getElementById( 'header' ).style.backgroundColor     = stringColor;
    document.getElementById( 'colorNumber' ).innerHTML            = stringColor;
  }

  // Execute Function to get default Color
  setNewColor( color );

  getSliderData();

})( window );
