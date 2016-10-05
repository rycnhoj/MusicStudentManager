// John Cyr

// Working with radio buttons
// document.querySelector('input[name=inst-radio]:checked');
// document.querySelector('input[name=inst-radio]:checked').value;

(function() {
"use strict";

var firstname = document.getElementById('first-name');
var lastname = document.getElementById('last-name');
var age = document.getElementById('age');
var type = document.getElementById('select-person-type');
var instrument = document.querySelector('input[name=inst-radio]:checked');
var active = document.getElementById('is-active-checkbox');


document.getElementById('add-person-form').addEventListener('submit', dataCheck);

function dataCheck(event) {
    event.preventDefault();

    if (firstname.value === '') {
      alert('Please provide a first name.')
      firstname.focus();
    }
    else if (lastname.value === '') {
      alert('Please provide a last name.')
      lastname.focus();
    }
    else if (age.value === '') {
       alert('Please provide an age.')
       age.focus();
   }
    else if (type.selectedIndex == 0) {
      alert('Please select a person type.')
      type.focus();
    }
    else if (instrument == null) {
      alert('Please select an instrument.')
    } else {
      console.log('Form Submitted!');
    }


}

})();
