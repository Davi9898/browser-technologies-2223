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

            if(fieldset !== form.lastElementChild){
                //if last child, do not append!
                fieldSetFooter.appendChild(next);
            }

            if (fieldset !== form.firstElementChild) {
                fieldSetFooter.appendChild(back);
            }

            fieldset.querySelector('section').appendChild(fieldSetFooter)

          

            //MAAK return button
            
        })

        

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
          
            // Check if at least one radio button in current fieldset is selected
            const radioButtons = currentFieldset.querySelectorAll('input[type="radio"]');
            let isRadioButtonSelected = false;
          
            for (let radioButton of radioButtons) {
              if (radioButton.checked) {
                isRadioButtonSelected = true;
                break;
              }
            }
          
            // Display error message and return if any required input is missing a value or no radio button in current fieldset is selected
            if (isMissingValue || (radioButtons.length > 0 && !isRadioButtonSelected)) {
              // Check if there is already an error message displayed in the current fieldset
              let errorMessage = currentFieldset.querySelector('.error-message');
              if (!errorMessage) {
                errorMessage = document.createElement('p');
                errorMessage.classList.add('error-message');
                errorMessage.textContent = 'Vul alle velden in❌';
                currentFieldset.appendChild(errorMessage);
              }
              return;
            }
          
            // Clear any previous error messages and proceed to next fieldset
            const errorMessages = currentFieldset.querySelectorAll('.error-message');
            errorMessages.forEach(errorMessage => errorMessage.remove());
          
            [...document.querySelectorAll('fieldset')].forEach((fieldset) => {
              fieldset.classList.remove('fieldset-active');
            })
          
            let nextTarget = currentFieldset.nextElementSibling;
            nextTarget.classList.add('fieldset-active');
          }
          
          
          

        function lastFieldSet(e) {
            e.preventDefault();

            [...document.querySelectorAll('fieldset')].forEach((fieldset) => {
                fieldset.classList.remove('fieldset-active');
            })

            let lastTarget = e.target.closest('fieldset').previousElementSibling;
            lastTarget.classList.add('fieldset-active');
        }

        form.firstElementChild.classList.add('fieldset-active');
