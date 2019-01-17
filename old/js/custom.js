// John Cyr

// Working with radio buttons
// document.querySelector('input[name=inst-radio]:checked');
// document.querySelector('input[name=inst-radio]:checked').value;

(function() {
"use strict";

  // Input fields
  var firstname = document.getElementById('first-name');
  var lastname = document.getElementById('last-name');
  var age = document.getElementById('age');
  var type = document.getElementById('select-person-type');
  var instruments = document.querySelectorAll('input[name=inst-radio]');
  var active = document.getElementById('is-active-checkbox');

  // On document load
  document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('add-person-form').addEventListener('submit', dataCheck);


  });

  // Determines if any of the instrumetn radio buttons have been selected
  // returns true if one has been selected
  function instrumentRadioCheck() {
    var radioCount = instruments.length;

    for(var rbtn = 0; rbtn < radioCount; rbtn++)
    {
      if (instruments[rbtn].checked) {
        return true;
      }
    }

    return false;
  };

  function dataCheck(event) {
      event.preventDefault();

      if (firstname.value === '') {
        alert('Please provide a first name.');
        firstname.focus();
        return false;
      }
      else if (lastname.value === '') {
        alert('Please provide a last name.');
        lastname.focus();
        return false;
      }
      else if (age.value === '') {
         alert('Please provide an age.');
         age.focus();
         return false;
     }
      else if (type.selectedIndex == 0) {
        alert('Please select a person type.');
        type.focus();
        return false;
      }
      else if (!instrumentRadioCheck()) {
        alert('Please select an instrument.');
        return false;
      } else {
        console.log('Form Ready to Submit!');
        return true;
      }
  };

})();
