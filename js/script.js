// Feature detection
if ('flex' in document.body.style) {
  // Flexbox is supported
} else {
  // Flexbox is not supported
}

if ('boxSizing' in document.body.style ||
    '-moz-box-sizing' in document.body.style ||
    '-webkit-box-sizing' in document.body.style) {
  // Box sizing is supported
} else {
  // Box sizing is not supported
}

if (typeof document.body.style.webkitTouchCallout !== 'undefined' ||
    typeof document.body.style.webkitUserSelect !== 'undefined' ||
    typeof document.body.style.khtmlUserSelect !== 'undefined' ||
    typeof document.body.style.mozUserSelect !== 'undefined' ||
    typeof document.body.style.msUserSelect !== 'undefined' ||
    typeof document.body.style.userSelect !== 'undefined') {
  // CSS selectors are supported
} else {
  // CSS selectors are not supported
}

const form = document.querySelector('form');

[...document.querySelectorAll('fieldset')].forEach((fieldset) => {
  fieldset.classList.add('floating-fieldset');



  let fieldSetFooter = document.createElement('div');
  fieldSetFooter.classList.add('buttonfooter')

  let next = document.createElement('button');
  next.classList.add('button-styling-next')
  next.innerText = "volgende";
  next.addEventListener('click', nextfieldset);

  let back = document.createElement('button');
  back.classList.add('button-styling-back')
  back.innerText = "vorige";
  back.addEventListener('click', lastFieldSet);

  if (fieldset !== form.lastElementChild) {
    //if last child, do not append!
    fieldSetFooter.appendChild(next);
  }

  if (fieldset !== form.firstElementChild) {
    fieldSetFooter.appendChild(back);
  }

  fieldset.querySelector('section').appendChild(fieldSetFooter)



  //MAAK return button

})

function updateProgress() {
  console.log('banaan')
  const currentFieldset = document.querySelector('.fieldset-active');
  const allFieldsets = document.querySelectorAll('fieldset'); 
  const progressList = document.querySelector('header ul')
  
  progressList.innerHTML = '';

  let counter = 1;
allFieldsets.forEach((fieldset) => {
  const progressLi = document.createElement('li');
  progressLi.textContent = counter++;
  
  // add classes based on currentFieldset and progressList state
  if (currentFieldset == fieldset) {
    progressLi.classList.add('progress-active');
  } 
  console.log(typeof progressList.querySelector('.progress-active') == 'undefined')
  if (progressList.querySelectorAll('.progress-active').length == 0 &&  currentFieldset !== fieldset){
    progressLi.classList.add('progress-done')
  }
  
  progressList.appendChild(progressLi);
})
}



function nextfieldset(e) {
  e.preventDefault();
  // Check if all required inputs in current fieldset have a value
  const currentFieldset = e.target.closest('fieldset');
  const requiredInputs = currentFieldset.querySelectorAll('input[required]:not([type="radio"])');
  let isMissingValue = false;

  for (let input of requiredInputs) {
    if (!input.value) {
      isMissingValue = true;
      break;
    }
  }

 // Check if the input with a pattern matches the pattern
 const patternInput = currentFieldset.querySelector('input[pattern]');
 if (patternInput && !patternInput.checkValidity()) {
   let errorMessage = currentFieldset.querySelector('.error-message');
   if (!errorMessage) {
     errorMessage = document.createElement('p');
     errorMessage.classList.add('error-message');
     errorMessage.textContent = 'Een studentnummer heeft 9 cijfers❌';
     currentFieldset.appendChild(errorMessage);
   }
   return;
 }

  // Check if all radio button groups in current fieldset are selected
  const radioGroups = currentFieldset.querySelectorAll('input[type="radio"][name]');
  let isRadioGroupSelected = true;

  for (let radioGroup of radioGroups) {
    const groupName = radioGroup.name;
    const groupRadios = currentFieldset.querySelectorAll(`input[type="radio"][name="${groupName}"]`);
    let isGroupRadioSelected = false;

    for (let groupRadio of groupRadios) {
      if (groupRadio.checked) {
        isGroupRadioSelected = true;
        break;
      }
    }

    if (!isGroupRadioSelected) {
      isRadioGroupSelected = false;
      break;
    }
  }

  // Display error message and return if any required input is missing a value or not all radio button groups in current fieldset are selected
  if (isMissingValue || !isRadioGroupSelected) {
    // Check if there is already an error message displayed in the current fieldset
    let errorMessage = currentFieldset.querySelector('.error-message');
    if (!errorMessage) {
      errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'Vul alle velden met * in❌';
      currentFieldset.appendChild(errorMessage);
    }
    return;
  }

  // Clear any previous error messages and proceed to next fieldset
  const errorMessages = currentFieldset.querySelectorAll('.error-message');
  errorMessages.forEach(errorMessage => errorMessage.remove());

  let nextTarget = currentFieldset.nextElementSibling;
  // while (nextTarget && nextTarget.tagName.toLowerCase() !== 'fieldset') {
  //   nextTarget = nextTarget.nextElementSibling;
  // }

  if (nextTarget && nextTarget.tagName.toLowerCase() == 'fieldset') {
    [...document.querySelectorAll('fieldset')].forEach((fieldset) => {
      fieldset.classList.remove('fieldset-active');
    })

    nextTarget.classList.add('fieldset-active');
    updateProgress()
  }
}

// Terug button
function lastFieldSet(e) {
  e.preventDefault();
  

  [...document.querySelectorAll('fieldset')].forEach((fieldset) => {
    fieldset.classList.remove('fieldset-active');
  })

  let lastTarget = e.target.closest('fieldset').previousElementSibling;
  lastTarget.classList.add('fieldset-active');
  updateProgress();
}

form.firstElementChild.classList.add('fieldset-active');

updateProgress();

// Local storage

const radioButtons = document.querySelectorAll('input[type="radio"]');

// Loop through all radio buttons and attach a "change" event listener to each one
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', event => {
    // Get the name of the radio button group and the selected value
    const name = event.target.name;
    const value = event.target.value;

    // Store the selected value to local storage
    localStorage.setItem(name, value);
  });

  // Check if there is a stored value for the radio button group
  const storedValue = localStorage.getItem(radioButton.name);
  if (storedValue) {
    // If a stored value exists, find the radio button with the same value and select it
    if (radioButton.value === storedValue) {
      radioButton.checked = true;
    }
  }
});

// Get all textareas
const textareas = document.querySelectorAll('textarea');

// Loop through all textareas and attach an "input" event listener to each one
textareas.forEach(textarea => {
  textarea.addEventListener('input', event => {
    // Get the name of the textarea and the value
    const name = event.target.name;
    const value = event.target.value;

    // Store the value in local storage
    localStorage.setItem(name, value);
  });

  // Retrieve the value from local storage and set it as the value of the textarea
  const storedValue = localStorage.getItem(textarea.name);
  if (storedValue) {
    textarea.value = storedValue;
  }
});

const inputFields = document.querySelectorAll('input[type="text"]');

// Loop through all input fields and attach a "change" event listener to each one
inputFields.forEach(inputField => {
  inputField.addEventListener('change', event => {
    // Get the name of the input field and the entered value
    const name = event.target.name;
    const value = event.target.value;

    // Store the entered value to local storage
    localStorage.setItem(name, value);
  });
});

// Retrieve the saved values and set them as the current value of the input fields
inputFields.forEach(inputField => {
  const name = inputField.name;
  const value = localStorage.getItem(name);
  if (value) {
    inputField.value = value;
  }
});

// local storage clearen
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', event => {
  // Clear the local storage
  localStorage.clear();
});

